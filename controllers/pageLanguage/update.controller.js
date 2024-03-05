// Import dependences
// Personal
// Schemas
import PageLanguage from "./../../models/PageLanguage.schema.js";

const update = async (req, res) => {
  try {
    // Get data
    const { id } = req.params;
    const { body } = req;

    // Update data
    const data = await PageLanguage.findByIdAndUpdate(id, body, {
      new: true,
    });

    res
      .json({
        message: "Update successfull",
        status: 200,
        data: data,
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

export default update;
