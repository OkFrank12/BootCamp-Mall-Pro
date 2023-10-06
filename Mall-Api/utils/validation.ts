import joi from "joi";

let regex =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

export const registerValidation = joi.object({
  owner: joi.string().required(),
  email: joi.string().email().trim().lowercase().required(),
  password: joi.string().pattern(new RegExp(regex)).required(),
  confirm: joi.ref("password"),
});

export const registerAdminValidation = joi.object({
  email: joi.string().email().trim().lowercase().required(),
  password: joi.string().pattern(new RegExp(regex)).required(),
});

export const loginValidation = joi.object({
  email: joi.string().email().trim().lowercase().required(),
  password: joi.string().pattern(new RegExp(regex)).required(),
});

export const loginAdminValidation = joi.object({
  email: joi.string().email().trim().lowercase().required(),
  password: joi.string().pattern(new RegExp(regex)).required(),
});

export const FirstAuthValidation = joi.object({
  secretKey: joi.string().required(),
});

export const resetValidation = joi.object({
  email: joi.string().email().trim().lowercase().required(),
});

export const changeValidation = joi.object({
  password: joi.string().pattern(new RegExp(regex)).required(),
});
