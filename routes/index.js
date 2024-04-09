// Import the Express module
import express, { urlencoded, json } from "express"; // We will discuss the urlencoded and json functions later. Note: These will appear as unused.

// Import the index controllers module
import { get } from "../controllers/index.js";

// Create an Express router
const router = express.Router();

// Create a GET route
router.get("/", get);

// Export the router
export default router;