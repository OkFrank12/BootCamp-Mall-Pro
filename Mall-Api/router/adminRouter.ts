import express from "express";
import validator from "../utils/validator";
import {
  changeValidation,
  loginAdminValidation,
  registerAdminValidation,
  resetValidation,
} from "../utils/validation";
import {
  FirstAdminVerification,
  changeAdminPassword,
  deleteAdminAuth,
  loginAdminAuth,
  registerAdminAuth,
  resetAdminPassword,
  secondAdminVerification,
  viewAllAdmin,
  viewingOneAdmin,
} from "../controller/adminController";
const admin = express.Router();

admin
  .route("/register-admin")
  .post(validator(registerAdminValidation), registerAdminAuth);
admin.route("/:token/verify-account-start").get(FirstAdminVerification);
admin.route("/:token/verify-admin").get(secondAdminVerification);
admin
  .route("/login-admin")
  .post(validator(loginAdminValidation), loginAdminAuth);
admin.route("/:adminID/one").get(viewingOneAdmin);
admin.route("/:adminID/delete").delete(deleteAdminAuth);
admin.route("/all").get(viewAllAdmin);
admin
  .route("/reset-admin-password")
  .patch(validator(resetValidation), resetAdminPassword);
admin
  .route("/:token/change-account-password")
  .patch(validator(changeValidation), changeAdminPassword);

export default admin;
