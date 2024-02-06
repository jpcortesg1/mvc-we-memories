// Import dependences
// External
import express from "express"

// Personal
import PageLanguage from "../models/PageLanguage.schema.js";

// Define router
const router = express.Router();

// Define routes
// Home route
router.get("/", async (req,res) => {
  // Get cookie
  const lang = req.cookies.lang || 'ES'

  // Get data
  const data = await PageLanguage.findOne({
    page: "home",
    language: lang
  })

  // Render view
  res.render("home.ejs", data)
})

// Change language route
router.post("/change-language/:lang", (req, res) => {
  try {
    const languages = ['ES', 'EN']
    const lang = req.params.lang.toUpperCase()

    if (!languages.includes(lang)) {
      return res.json({
        error: 'Language not found',
        status: 400
      })
    }
    
    res.cookie("lang", lang, {maxAge: 900000, httpOnly: true})
    
    return res.json({
      message: 'Change of language success!',
      status: 200,
      data: {
        language: lang
      }
    })
  } catch (error) {
    return res.json({
      error: error.message,
      status: 500  
    })
  }
})

// Export router
export default router;