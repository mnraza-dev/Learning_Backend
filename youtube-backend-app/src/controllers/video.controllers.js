import Video from "../models/video.models.js";
export const uploadVideo = async (req, res) => {
  try {
    const { title, description, category, tags } = req.body;
    if (!req.files || !req.files.video || !req.files.thumbnail) {
      return res
        .status(400)
        .json({ message: "Video and thumbnail are required" });
    }
    const videoUpload = await cloudinary.uploader.upload(
      req.files.video.tempFilePath,
      {
        resource_type: "video",
        folder: "videos",
      }
    );
    const thumbnailUpload = await cloudinary.uploader.upload(
      req.files.thumbnail.tempFilePath,
      {
        folder: "thumbnails",
      }
    );

    const video = await new Video({
      _id: new mongoose.Types.ObjectId(),
      title,
      description,
      user_id: req.user._id,
      videoUrl: videoUpload.secure_url,
      videoId: videoUpload.public_id,
      thumbnailUrl: thumbnailUpload.secure_url,
      thumbnailId: thumbnailUpload.public_id,
      category,
      tags: tags ? tags.split(",") : [],
    });

    await video.save();

    res.status(201).json({ message: "Video uploaded successfully", video });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateVideo = async (req, res) => {
  try {
    // update video meta data
    const { title, description, category, tags } = req.body;
    const videoId = req.params.id;

    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    video.title = title;
    video.description = description;
    video.category = category;
    video.tags = tags ? tags.split(",") : [];

    await video.save();

    res.status(200).json({ message: "Video updated successfully", video });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
