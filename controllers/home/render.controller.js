// Import dependences
// Personal
// Models
import PageLanguage from "./../../models/PageLanguage.schema.js";

const render = async (req, res) => {
  try {
    // Get cookie
    const lang = req.cookies.lang || "ES";
    const { params } = req;

    // Get data
    const data = await PageLanguage.findOne({
      page: "home",
      language: lang,
    });
    let response = {...data._doc, year: null}
    
    // Add year
    if(params?.year){
      response.year = params.year
    }

    // Render view
    res.render("home.ejs", response);
  } catch (error) {
    res.json({
      error: error.message,
      status: 500,
    });
  }
};

export default render;
