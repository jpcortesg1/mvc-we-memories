// Import dependencies
// Personal
import Memory from "../../models/memory.schema.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
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
