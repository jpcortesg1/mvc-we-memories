import Memory from "../../models/memory.schema.js";

const haveCredentialsUserId = async (req, res, next) => {
  try {
    const uuid = req.cookies.uuid;
    const { id } = req.params;
    const memory = await Memory.findById(id);
    if (memory.idUser !== uuid) {
      return res.status(403).json({ error: "You don't have permission", status: 403 });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message, status: 500 });
  }
};

export default haveCredentialsUserId;
