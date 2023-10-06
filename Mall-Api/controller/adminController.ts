import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { role } from "../config/role";
import {
  sendAdminLastMail,
  sendAdminOpeningMail,
  sendAdminResetMail,
  sendOwnerResetMail,
} from "../utils/googleMail";

const prisma = new PrismaClient();

export const registerAdminAuth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const salted = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salted);
    const val = crypto.randomBytes(2).toString("hex");
    const secretKey = crypto.randomBytes(2).toString("hex");
    const token = jwt.sign(val, "tokenSecret");

    const owner = await prisma.ownerModel.findUnique({
      where: { email },
    });

    const dispatch = await prisma.theDispatchRiderModel.findUnique({
      where: { email },
    });

    if ((owner?.email && dispatch?.email) === email) {
      return res.status(404).json({
        message:
          "You have already signed up as a store owner or a dispatch rider",
      });
    } else {
      const admin = await prisma.theAdminModel.create({
        data: {
          email,
          password: hashed,
          role: role.ADMIN,
          token,
          secretKey,
        },
      });
      const adminToken = jwt.sign({ id: admin.id }, "tokenSecret");
      sendAdminOpeningMail(admin, adminToken).then(() => {
        console.log("Admin Mail sent!!!");
      });

      return res.status(201).json({
        message: "Registering Admin Auth",
        data: admin,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error registering admin auth",
      data: error.message,
    });
  }
};

export const FirstAdminVerification = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { secretKey } = req.body;

    jwt.verify(token, "tokenSecret", async (err: any, payload: any) => {
      if (err) {
        return err;
      } else {
        const admin = await prisma.theAdminModel.findUnique({
          where: { id: payload.id },
        });

        if (admin?.secretKey === secretKey) {
          const adminToken = jwt.sign({ id: admin?.id }, "tokenSecret");
          sendAdminLastMail(admin, adminToken).then(() => {
            console.log("Last Mail sent...!");
          });

          return res.status(200).json({
            message: "Please go verify your account",
          });
        } else {
          return res.status(404).json({
            message: "Secret Key doesn't match",
          });
        }
      }
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error verifying admin",
      data: error.message,
    });
  }
};

export const secondAdminVerification = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    jwt.verify(token, "tokenSecret", async (err: any, payload: any) => {
      if (err) {
        throw new Error();
      } else {
        const admin = await prisma.theAdminModel.findUnique({
          where: { id: payload.id },
        });

        if (admin) {
          await prisma.theAdminModel.update({
            where: { id: admin.id },
            data: {
              verified: true,
              token: "",
            },
          });

          return res.status(200).json({
            message: "Congratulations your account has been verified...!",
          });
        } else {
          return res.status(404).json({
            message: "Error with the token",
          });
        }
      }
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error with verification",
      data: error.message,
    });
  }
};

export const loginAdminAuth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await prisma.theAdminModel.findUnique({
      where: { email },
    });

    if (admin) {
      const checkPassword = await bcrypt.compare(password, admin.password);
      if (checkPassword) {
        if (admin.verified && admin.token === "") {
          const token = jwt.sign({ id: admin.id }, "tokenSecret");
          return res.status(201).json({
            message: `Welcome ${admin.role}`,
            data: token,
          });
        } else {
          return res.status(404).json({
            message: "Please go and verify your admin account",
          });
        }
      } else {
        return res.status(404).json({
          message: "Password is invalid",
        });
      }
    } else {
      return res.status(404).json({
        message: "No Admin ID found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error logining in auth",
      data: error.message,
    });
  }
};

export const resetAdminPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const admin = await prisma.theAdminModel.findUnique({
      where: { email },
    });

    if (admin?.verified && admin.token === "") {
      const token = jwt.sign({ id: admin.id }, "tokenSecret");

      await prisma.theAdminModel.update({
        where: { id: admin.id },
        data: {
          token,
        },
      });

      sendAdminResetMail(admin, token).then(() => {
        console.log("Reset Admin Mail sent!!!");
      });

      return res.status(201).json({
        message: `You can change your password`,
      });
    } else {
      return res.status(404).json({
        message: "Token Error",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error reseting admin password",
      data: error.message,
    });
  }
};

export const changeAdminPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const getAdminID: any = jwt.verify(
      token,
      "tokenSecret",
      (err: any, payload: any) => {
        if (err) {
          throw new Error();
        } else {
          return payload;
        }
      }
    );

    const admin = await prisma.theAdminModel.findUnique({
      where: { id: getAdminID.id },
    });

    if (admin?.verified && admin.token !== "") {
      const salted = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salted);

      await prisma.theAdminModel.update({
        where: { id: admin.id },
        data: {
          password: hashed,
          token: "",
        },
      });

      return res.status(201).json({
        message: "Password is changed now!!!",
      });
    } else {
      return res.status(404).json({
        message: "Can't change this password",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error changing admin",
      data: error.message,
    });
  }
};

export const viewAllAdmin = async (req: Request, res: Response) => {
  try {
    const all = await prisma.theAdminModel.findMany({});

    return res.status(200).json({
      message: "viewing all admin",
      data: all,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing all admin",
      data: error.message,
    });
  }
};

export const viewingOneAdmin = async (req: Request, res: Response) => {
  try {
    const { adminID } = req.params;
    const admin = await prisma.theAdminModel.findUnique({
      where: { id: adminID },
    });

    return res.status(200).json({
      message: "Viewing one admin",
      data: admin,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing one admin",
      data: error.message,
    });
  }
};

export const deleteAdminAuth = async (req: Request, res: Response) => {
  try {
    const { adminID } = req.params;
    await prisma.theAdminModel.delete({
      where: { id: adminID },
    });

    return res.status(404).json({
      message: "Deleted Admin",
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error deleting admin auth",
      data: error.message,
    });
  }
};
