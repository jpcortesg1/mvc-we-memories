// Import dependences
// External
import express from "express";
import multer from "multer";

// Personal
// Controllers
import { create } from "./../controllers/memroy/main.controllers.js";

// Define router
const router = express.Router();

// Define routes
router.post("/", multer().single('file'), create);

// Export router
export default router;
