// Import dependencies
// External

// Personal
import sharp from "sharp";
import uploadFile from "../../utils/s3/uploadFile.js";

const create = async (req, res) => {
  try {
    const { file, body } = req;
    const { originalname, buffer } = file;
    const newName = originalname.replace(/\.\w+$/, '.webp');
    const webBuffer = await sharp(buffer)
    .resize(300)
    .webp({ quality: 50 })
    .toBuffer();
    const data = await uploadFile(newName, webBuffer);

    return res
      .json({
        message: "Hello World from memroies routes",
        status: 200,

        hola: "hola",
        body,
      })
      .status(200);
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: error.message, status: 500 });
  }
};

export default create;
