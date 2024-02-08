// Import dependences
// Personal
// Schemas
import PageLanguage from "./../../models/PageLanguage.schema.js";

const create = async (req, res) => {
  try {
    // Data
    const newPageLanguage = new PageLanguage(req.body);
    const pageLanguage = await newPageLanguage.save();

    res
      .json({
        message: "Home route",
        status: 200,
        data: pageLanguage,
      })
      .status(200);
  } catch (error) {
    console.log(error.message);
    return json({
      error: error.message,
      status: 500,
    }).status(500);
  }
};

export default create;
