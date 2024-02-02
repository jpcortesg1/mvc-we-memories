// Import dependences
// External
import express from "express"

// Personal
import userRoutes from "./user.routes.js"
import homeRoutes from "./home.routes.js"

// Define router
const router = express.Router();

// Use routes
router.use("/", homeRoutes)
router.use("/users", userRoutes)


// Export router
export default router;