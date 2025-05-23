import Photo from "../Model/photo_model.js";

export const uploadPhoto = async (req, res, cloudinaryRes) => {
  try {
    await Photo.create({
      fileName: req.file.originalname,
      publicId: cloudinaryRes.public_id,
      imgUrl: cloudinaryRes.secure_url,
    });

    const photos = await Photo.find().sort({ createdAt: -1 });
    res.render("index.ejs", { photos });
  } catch (error) {
    console.error("Error uploading photo:", error);
    res.status(500).send("Error uploading photo.");
  }
};

export const getGallery = async (req, res) => {
  const photos = await Photo.find().sort({ createdAt: -1 });
  res.render("index.ejs", { photos });
};

export const deletePhoto = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (photo) {
      // Optional: delete from cloudinary if needed
      await Photo.findByIdAndDelete(req.params.id);
    }
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting photo:", err);
    res.status(500).send("Delete failed");
  }
};

export default { uploadPhoto, getGallery, deletePhoto };
