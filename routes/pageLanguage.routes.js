// Import dependences
// External
import express from "express";

// Personal
// Controllers
import {
  create,
  update,
} from "./../controllers/pageLanguage/main.controller.js";

// Schemas
import {
  createSchema,
  updateSchema,
} from "./../schemas/pageLanguage/pageLanguage.schema.js";

// Middlewares
import { validateSchema } from "./../middlewares/schemas/schama.middleware.js";

// Define router
const router = express.Router();

// Define routes
// Create
router.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createSchema),
  create
);

// Update
router.patch(
  "/:id",
  (req, res, next) => validateSchema(req, res, next, updateSchema),
  update
);

export default router;
