import { V2 as cloudinary } from "cloudinary";
<<<<<<< HEAD
=======

>>>>>>> 1a63bbcfc984fe6ba5adfaaf22ddc7d484c23e6a
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
<<<<<<< HEAD
=======

>>>>>>> 1a63bbcfc984fe6ba5adfaaf22ddc7d484c23e6a
const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "profilePic",
    });
    return result.secure_url;
  } catch (error) {
<<<<<<< HEAD
    console.log(error);
  }
};
export default cloudinary;
=======
 
    console.log(error);
  }
};

export default cloudinary;
>>>>>>> 1a63bbcfc984fe6ba5adfaaf22ddc7d484c23e6a
