import multer from "multer";
import express from "express";
import { isAuth } from "../utils.js";

const sellerLogoUplpadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "logo/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

sellerLogoUplpadRouter.post("/", isAuth, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default sellerLogoUplpadRouter;
