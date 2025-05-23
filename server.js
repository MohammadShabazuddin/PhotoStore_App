import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import photoController from "./Controller/photo_controler.js";
import {
  uploadPhoto,
  getGallery,
  deletePhoto,
} from "./Controller/photo_controler.js";
dotenv.config();

const app = express();
app.set("view engine", "ejs");
import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: "dz0gwtbn",
  api_key: "25198746292658",
  api_secret: "aNb7fPJ-Bi53Y_eyAt0pdNonIA", // Click 'View API Keys' above to copy your API secret
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs", { photos: null });
});

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.get("");

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "photos",
  });
  // I want to call photoController here
  await uploadPhoto(req, res, cloudinaryRes);
  //   res.json({ message: "File Uploaded" });
});

// Display gallery
app.get("/", getGallery);

// Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  const cloudinaryRes = await cloudinary.uploader.upload(req.file.path, {
    folder: "photos",
  });
  await uploadPhoto(req, res, cloudinaryRes);
});

// Delete route
app.post("/delete/:id", deletePhoto);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
