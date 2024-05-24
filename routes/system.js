import express from "express";

import {
  createSystem,
  getSystems,
  getSystem,
} from "../controllers/system.js";

const router = express.Router();

router.post("/", createSystem);
router.get("/", getSystems);
router.get("/:id", getSystem);

export default router;