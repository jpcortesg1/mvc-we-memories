// Import dependencies
// External
import { v4 as uuidv4 } from "uuid";

const validateNecessayCokies = (req, res, next) => {
  if (!req.cookies.uuid) {
    res.cookie("uuid", uuidv4(), { maxAge: 900000, httpOnly: true });
  }
  if (!req.cookies.lang) {
    res.cookie("lang", "ES", { maxAge: 900000, httpOnly: true });
  }
  next();
};

export default validateNecessayCokies;
