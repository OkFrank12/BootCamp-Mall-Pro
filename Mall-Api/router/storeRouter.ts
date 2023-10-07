import express from "express";
import {
  createProducts,
  deleteProduct,
  payment,
  viewOneOwnerProducts,
  viewOneProducts,
  viewProducts,
} from "../controller/storeController";
import multer from "multer";

const store = express.Router();

const uploads = multer().single("avatar");

store.route("/:ownerID/create-products").post(uploads, createProducts);
store.route("/view-products").get(viewProducts);
store.route("/view-one-product").get(viewOneProducts);
store.route("/:ownerID/view-owner-products").get(viewOneOwnerProducts);
store.route("/:productID/delete").delete(deleteProduct);
store.route("/make-payment").post(payment);

export default store;
