import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  fileName: String,
  publicId: String,
  imgUrl: String,
});

export default mongoose.model("Photo", photoSchema);
