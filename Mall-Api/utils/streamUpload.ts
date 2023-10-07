import cloudinary from "../config/cloudinary";
import streamifier from "streamifier";
import { Request } from "express";

export const streamUpload = async (req: any) => {
  return new Promise(async (resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream((err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });

    streamifier.createReadStream(req.file?.buffer).pipe(stream);
  });
};
