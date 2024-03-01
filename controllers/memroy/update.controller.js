// Import dependencies
// External
import sharp from "sharp";

// Personal
import Memory from "../../models/memory.schema.js";
import deleteFile from "../../utils/s3/deleteFile.js";
import uploadFile from "../../utils/s3/uploadFile.js";

const update = async (req, res) => {
  try {
    // Get data
    const { file, body } = req;
    const { id } = req.params;

    // If have file remove old file and save new file
    if (file) {
      // Delete file
      const memory = await Memory.findById(id);
      const key = `MVC-memories/${memory.urlImage.split("/").slice(-1)}`;
      await deleteFile(key);

      // Save new file
      const { originalname, buffer } = file;
      const newName = originalname.replace(/\.\w+$/, ".webp");
      const webBuffer = await sharp(buffer)
        .resize(300)
        .webp({ quality: 50 })
        .toBuffer();
      const data = await uploadFile(newName, webBuffer);
      const { Location } = data;
      body.urlImage = Location;
    }

    // Update memory
    await Memory.findByIdAndUpdate(id, body);

    // Response
    return res
      .json({
        message: "Memory update",
        status: 200,
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
};

export default update;
