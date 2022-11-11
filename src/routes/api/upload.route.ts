import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import express, { NextFunction, Request, Response } from "express";
import formidable from "formidable";

import cloudinary from "@configs/cloudinary.config";

const UploadRouter = express.Router();
const form = formidable({ multiples: false });

UploadRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  form.parse(req, async (err, fields, files) => {
    // console.log(files);
    if (err) {
      next(err);
      return;
    }
    // console.log(files.file);
    await cloudinary.uploader.upload(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore incorrect type from formidable
      files.file.filepath,
      (error: UploadApiErrorResponse, result: UploadApiResponse) => {
        res.json(result);
      }
    );
  });
});

export default UploadRouter;
