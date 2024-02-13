// Import dependencies
// External
import sharp from "sharp";

// Personal
// Models
import Memory from "./../../models/memory.schema.js";

// Utils
import uploadFile from "../../utils/s3/uploadFile.js";

const create = async (req, res) => {
  try {
    const referer = req.get("referer");
    const year = referer.split("/").slice(-1)[0];
    const uuid = req.cookies.uuid;
    const { file, body } = req;
    const { originalname, buffer } = file;
    const newName = originalname.replace(/\.\w+$/, ".webp");
    const webBuffer = await sharp(buffer)
      .resize(300)
      .webp({ quality: 50 })
      .toBuffer();
    const data = await uploadFile(newName, webBuffer);
    const { Location } = data;
    const newMemory = new Memory({
      ...body,
      urlImage: Location,
      idUser: uuid,
      year,
    });
    const memory = await newMemory.save();

    return res
      .json({
        message: "Memory created successfully",
        status: 200,
        data: memory,
      })
      .status(200);
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: error.message, status: 500 });
  }
};

export default create;
