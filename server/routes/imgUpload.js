import { Router } from "express";
import multer from "multer";
import { uploadPic } from "../controllers/_pic.js";

//Instance
const router = Router();

// setting up the storage mechanism
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("profile"),uploadPic);

export default router;


