import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { role } from "../config/role";
import { sendOwnerOpeningMail, sendOwnerResetMail } from "../utils/googleMail";

const prisma = new PrismaClient();

export const registerOwner = async (req: Request, res: Response) => {
  try {
    const { owner, email, password } = req.body;
    const salted = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salted);
    const valued = crypto.randomBytes(16).toString("hex");
    const token = jwt.sign(valued, "tokenSecret");

    const account = await prisma.ownerModel.create({
      data: {
        owner,
        email,
        password: hashed,
        token,
        role: role.OWNER,
        store: [],
      },
    });

    const signToken = jwt.sign({ id: account.id }, "tokenSecret");

    sendOwnerOpeningMail(account, signToken).then(() => {
      console.log("Owner's opening mail!!!🙌🙌🙌");
    });

    return res.status(201).json({
      message: "Register Owner successfully",
      data: account,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error registering owner",
      data: error.message,
    });
  }
};

export const verifyOwner = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const getOwnerID: any = jwt.verify(
      token,
      "tokenSecret",
      (err: any, payload: any) => {
        if (err) {
          return err;
        } else {
          return payload;
        }
      }
    );

    const account = await prisma.ownerModel.update({
      where: { id: getOwnerID.id },
      data: {
        verified: true,
        token: "",
      },
    });

    return res.status(200).json({
      message: "Verified Owner",
      data: account,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error verifying owner",
      data: error.message,
    });
  }
};

export const signInOwner = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const account = await prisma.ownerModel.findUnique({
      where: { email },
    });

    if (account) {
      const checkPassword = await bcrypt.compare(password, account.password);
      if (checkPassword) {
        if (account.verified && account.token === "") {
          const token = jwt.sign({ id: account.id }, "tokenSecret");
          return res.status(201).json({
            message: `Welcome ${account.owner}`,
            data: token,
          });
        } else {
          return res.status(404).json({
            message: "Please go and verify 😥😥😥",
          });
        }
      } else {
        return res.status(404).json({
          message: "Password Invalid😖😖😖",
        });
      }
    } else {
      return res.status(404).json({
        message: "User is not found 😒😒🤦‍♂️🤦‍♂️🤷‍♀️",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error signing in owner",
      data: error.message,
    });
  }
};

export const viewAllStoreOwners = async (req: Request, res: Response) => {
  try {
    const allOwner = await prisma.ownerModel.findMany({});

    return res.status(200).json({
      message: "viewing all store owner",
      data: allOwner,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing all store owners",
      data: error.message,
    });
  }
};

export const viewingOneStoreOwner = async (req: Request, res: Response) => {
  try {
    const { accountID } = req.params;
    const one = await prisma.ownerModel.findUnique({
      where: { id: accountID },
    });

    return res.status(200).json({
      message: `viewing one storeOwner: ${one?.owner}`,
      data: one,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing one store owner",
      data: error.message,
    });
  }
};

export const resetOwnerPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const owner = await prisma.ownerModel.findUnique({
      where: { email },
    });

    if (owner?.verified && owner.token === "") {
      const token = jwt.sign({ id: owner.id }, "tokenSecret");

      await prisma.ownerModel.update({
        where: { id: owner.id },
        data: {
          token,
        },
      });

      sendOwnerResetMail(owner, token).then(() => {
        console.log("Owner's reset mail!!!🙌🙌🙌");
      });

      return res.status(201).json({
        message: "You can not change you password",
      });
    } else {
      return res.status(404).json({
        message: "Unauthorized to reset this password",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error reseting password",
      data: error.message,
    });
  }
};

export const changeOwnerPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const getOwnerID: any = jwt.verify(
      token,
      "tokenSecret",
      (err: any, payload: any) => {
        if (err) {
          return err;
        } else {
          return payload.id;
        }
      }
    );

    const owner = await prisma.ownerModel.findUnique({
      where: { id: getOwnerID },
    });

    if (owner?.verified && owner.token !== "") {
      const salted = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salted);

      await prisma.ownerModel.update({
        where: { id: owner.id },
        data: {
          password: hashed,
          token: "",
        },
      });

      return res.status(201).json({
        message: "Your password has been changed",
      });
    } else {
      return res.status(404).json({
        message: "Can't change this password",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error changing owner's password",
      data: error.message,
    });
  }
};

export const deleteOwnerBio = async (req: Request, res: Response) => {
  try {
    const { accountID } = req.params;

    const owner = await prisma.ownerModel.delete({
      where: { id: accountID },
    });

    return res.status(201).json({
      message: `Deleted ${owner.owner}`,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error deleting owner bio",
      data: error.message,
    });
  }
};
