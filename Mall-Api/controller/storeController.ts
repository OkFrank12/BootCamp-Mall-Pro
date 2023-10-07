import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { streamUpload } from "../utils/streamUpload";
import https from "https";

const prisma = new PrismaClient();

export const createProducts = async (req: Request, res: Response) => {
  try {
    const { ownerID } = req.params;
    const { title, category, description, cost, color } = req.body;
    const { secure_url, public_id }: any = await streamUpload(req);

    const owner = await prisma.ownerModel.findUnique({
      where: { id: ownerID },
      include: { store: true },
    });

    if (owner) {
      const product = await prisma.storeModel.create({
        data: {
          title,
          category,
          description,
          cost: parseInt(cost),
          ownerID,
          image: secure_url,
          imageID: public_id,
          color,
        },
      });

      owner?.store.push(product);

      return res.status(201).json({
        message: "Product successfully created",
        data: product,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating products",
      data: error.message,
    });
  }
};

export const viewProducts = async (req: Request, res: Response) => {
  try {
    const product = await prisma.storeModel.findMany({});

    return res.status(200).json({
      message: "View Products",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing products",
      data: error.message,
    });
  }
};

export const viewOneProducts = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const products = await prisma.storeModel.findUnique({
      where: { id: productID },
    });
    return res.status(200).json({
      message: "Viewing one product",
      data: products,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing one products",
      data: error.message,
    });
  }
};

export const viewOneOwnerProducts = async (req: Request, res: Response) => {
  try {
    const { ownerID } = req.params;

    const owner = await prisma.ownerModel.findUnique({
      where: { id: ownerID },
      include: { store: true },
    });

    if (owner) {
      return res.status(201).json({
        message: "view store owner product",
        data: owner.store,
      });
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing one owner products",
      data: error.message,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const user = await prisma.storeModel.delete({
      where: { id: productID },
    });

    if (user) {
      return res.status(201).json({
        message: "delete product",
      });
    } else {
      return res.status(404).json({
        message: "product not found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const payment = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    const params = JSON.stringify({
      email: "customer@email.com",
      amount: amount * 100,
    });

    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        Authorization:
          "Bearer sk_test_ec1b0ccabcb547fe0efbd991f3b64b485903c88e",
        "Content-Type": "application/json",
      },
    };

    const ask = https
      .request(options, (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          console.log(JSON.parse(data));
          res.status(200).json({
            message: "Payment successful",
            data: JSON.parse(data),
          });
        });
      })
      .on("error", (error) => {
        console.error(error);
      });

    ask.write(params);
    ask.end();
  } catch (error) {
    return res.status(404).json({
      message: "Error making Payment",
    });
  }
};
