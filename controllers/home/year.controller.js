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
      page: "year",
      language: lang,
    });

    // Memories
    const memories = await Memory.find({
      year: year,
    }).sort({ createdAt: -1 });
    const arrayOfMemories = memories.map((memory) => {
      const ago = Math.floor((new Date() - memory.createdAt) / 1000);
      let realAgo = ago;
      let complementary = "s";

      if (realAgo >= 60 && realAgo < 3600) {
        realAgo = Math.floor(realAgo / 60);
        complementary = "m";
      } else if (realAgo >= 3600 && realAgo < 86400) {
        realAgo = Math.floor(realAgo / 3600);
        complementary = "h";
      } else if (realAgo >= 86400) {
        realAgo = Math.floor(realAgo / 86400);
        complementary = "d";
      }
      let finishAgo =
        lang === "ES"
          ? `Hace ${realAgo}${complementary}`
          : `${realAgo}${complementary} Ago`;
      return {
        ...memory._doc,
        ago: finishAgo,
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
