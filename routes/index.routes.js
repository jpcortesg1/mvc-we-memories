// Import dependences
// External
import express from "express";

// Personal
import userRoutes from "./user.routes.js";
import homeRoutes from "./home.routes.js";
import pageLanguageRoutes from "./pageLanguage.routes.js";
import memoryRoutes from "./memory.routes.js";

// Define router
const router = express.Router();

// Use routes
router.use("/memories", memoryRoutes);
router.use("/users", userRoutes);
router.use("/page-language", pageLanguageRoutes);
router.use("/", homeRoutes);

// Export router
export default router;
