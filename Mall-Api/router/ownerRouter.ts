import express from "express";
import validator from "../utils/validator";
import {
  changeOwnerPassword,
  deleteOwnerBio,
  registerOwner,
  resetOwnerPassword,
  signInOwner,
  verifyOwner,
  viewAllStoreOwners,
  viewingOneStoreOwner,
} from "../controller/ownerController";
import {
  changeValidation,
  loginValidation,
  registerValidation,
  resetValidation,
} from "../utils/validation";

const owner = express.Router();

owner.route("/register").post(validator(registerValidation), registerOwner);
owner.route("/:token/verify-account").get(verifyOwner);
owner.route("/login").post(validator(loginValidation), signInOwner);
owner.route("/:accountID/one").get(viewingOneStoreOwner);
owner.route("/:accountID/delete").delete(deleteOwnerBio);
owner.route("/all").get(viewAllStoreOwners);
owner
  .route("/reset-account-password")
  .patch(validator(resetValidation), resetOwnerPassword);
owner
  .route("/:token/change-account-password")
  .patch(validator(changeValidation), changeOwnerPassword);

export default owner;
