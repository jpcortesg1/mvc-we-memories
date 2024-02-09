// Import dependences
// External
import express from "express";

// Personal
// Controllers
import { create } from "./../controllers/memroy/main.controllers.js";

// Define router
const router = express.Router();

// Define routes
router.post("/", create);

// Export router
export default router;
