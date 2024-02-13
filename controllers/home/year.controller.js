// Import dependences
// Personal
// Models
import PageLanguage from "./../../models/PageLanguage.schema.js";
import Memory from "./../../models/memory.schema.js";

const render = async (req, res) => {
  try {
    // Get cookie
    const lang = req.cookies.lang || "ES";
    const uuid = req.cookies.uuid;
    const { year } = req.params;
    if (isNaN(year)) {
      return res.redirect("/");
    }

    // Get language
    const language = await PageLanguage.findOne({
      page: "home",
      language: lang,
    });

    // Memories
    const memories = await Memory.find({
      year: year,
    }).sort({ createdAt: -1 });
    const arrayOfMemories = memories.map((memory) => {
      const ago = Math.floor(new Date() - memory.createdAt);
      let realAgo = ago / 1000;
      let complementary = "s";
      if (realAgo > 60) {
        realAgo = realAgo / 60;
        complementary = "m";
      }
      if (realAgo > 60) {
        realAgo = realAgo / 60;
        complementary = "h";
      }
      if (realAgo > 24) {
        realAgo = realAgo / 24;
        complementary = "d";
      }
      realAgo = Math.floor(realAgo);
      return {
        ...memory._doc,
        ago: `${realAgo}${complementary}`,
        isOwner: memory.idUser === uuid,
      };
    });

    // Render view
    res.render("pages/home/year.ejs", { language, memories: arrayOfMemories });
  } catch (error) {
    res.json({
      error: error.message,
      status: 500,
    });
  }
};

export default render;
