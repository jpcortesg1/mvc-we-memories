// Import dependences
import express from "express"

// Define router
const router = express.Router();

// Define routes
router.get("/", (req,res) => {
  res.send("Hello World from user routes")
})

// Export router
export default router;