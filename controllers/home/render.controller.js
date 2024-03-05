// Import dependences
// Personal
// Models
import PageLanguage from "./../../models/PageLanguage.schema.js";

const render = async (req, res) => {
  try {
    // Get cookie
    const lang = req.cookies.lang || "ES";

    // Get data
    const data = await PageLanguage.findOne({
      page: "home",
      language: lang,
    });

    // Render view
    res.render("pages/home/home.ejs", {language: data});
  } catch (error) {
    res.json({
      error: error.message,
      status: 500,
    });
  }
};

export default render;
