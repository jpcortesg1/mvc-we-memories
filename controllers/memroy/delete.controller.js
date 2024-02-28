// Import dependencies
// Personal
import Memory from "../../models/memory.schema.js";
import deleteFile from "../../utils/s3/deleteFile.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const memory = await Memory.findById(id);
    const key = `MVC-memories/${memory.urlImage.split("/").slice(-1)}`;
    await deleteFile(key);
    await Memory.findByIdAndDelete(id);
    return res
      .json({
        message: "Memory delete",
        status: 200,
      })
      .status(200);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      status: 500,
    });
  }
};

export default destroy;
