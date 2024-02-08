// Import dependences
// External
import express from "express";

// Personal
// Controllers
import { create } from "./../controllers/pageLanguage/main.controller.js";

// Schemas
import { createSchema } from "./../schemas/pageLanguage/pageLanguage.schema.js";

// Middlewares
import { validateSchema } from "./../middlewares/schemas/schama.middleware.js";

// Define router
const router = express.Router();

// Define routes
// Home route
router.post("/", (req, res, next) => validateSchema(req, res, next, createSchema) , create);

export default router;
