// Import dependences
// External
import express, { query } from "express"

// Controllers
import { render, changeLanguage } from "../controllers/home/home.controller.js";

// Define router
const router = express.Router();

// Define routes
// Home route
// Change language route
router.post("/change-language/:lang", changeLanguage)

router.get("/:year", render)

router.get("/", render)

router.post("/", (req,res) => {
  const {body} = req;
  const { year } = body;

  return res.redirect(`/${year}`);
})

// Export router
export default router;