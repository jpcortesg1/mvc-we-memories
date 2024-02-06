// Import dependences
// External
import express, { json } from "express";

// Personal
// Schemas
import PageLanguage from "../models/PageLanguage.schema.js";

// Define router
const router = express.Router();

// Define routes
// Home route
router.post("/", async (req, res) => {
  try {
    // Data
    const newPageLanguage = new PageLanguage(req.body);
    const pageLanguage = await newPageLanguage.save()
    
    res
      .json({
        message: "Home route",
        status: 200,
        data: pageLanguage
      })
      .status(200);
  } catch (error) {
    console.log(error.message);
    return json({
      error: error.message,
      status: 500,
    }).status(500);
  }
});

export default router;
