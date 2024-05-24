import express from "express";

import {
  createSystem,
  getSystems,
} from "../controllers/system.js";

const router = express.Router();

router.post("/", createSystem);
router.get("/", getSystems);

export default router;