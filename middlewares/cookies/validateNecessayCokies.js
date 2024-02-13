// Import dependencies
// External
import { v4 as uuidv4 } from "uuid";

const validateNecessayCokies = (req, res, next) => {
  if (!req.cookies.uuid) {
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    res.cookie("uuid", uuidv4(), {
      maxAge: oneWeekInMilliseconds,
      httpOnly: true,
    });
  }
  if (!req.cookies.lang) {
    res.cookie("lang", "ES", { maxAge: 900000, httpOnly: true });
  }
  next();
};

export default validateNecessayCokies;
