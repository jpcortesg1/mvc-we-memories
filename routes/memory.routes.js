// Import dependences
// External
import express from "express";
import multer from "multer";

// Personal
// Controllers
import { create, destroy } from "./../controllers/memroy/main.controllers.js";
import { haveCredentialsUserId } from "../middlewares/memory/main.middleware.js";

// Middlewares

// Define router
const router = express.Router();

// Define routes
router.post("/", multer().single("file"), create);

// Delete
router.delete("/:id", haveCredentialsUserId, destroy);

// Export router
export default router;
