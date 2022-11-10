import express, { NextFunction, Request, Response } from "express";
import formidable from "formidable";
import cloudinary from "@configs/cloudinary.config";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

const UploadRouter = express.Router();
const form = formidable({ multiples: false });

UploadRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  form.parse(req, async (err, fields, files) => {
    console.log(files);
    if (err) {
      next(err);
      return;
    }
    // console.log(files.file);
    await cloudinary.uploader.upload(
      // @ts-ignore  incorrect type from formidable
      files.file.filepath,
      (error: UploadApiErrorResponse, result: UploadApiResponse) => {
        res.json(result);
      }
    );
  });
});

export default UploadRouter;
