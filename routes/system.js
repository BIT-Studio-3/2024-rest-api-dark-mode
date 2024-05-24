import express from "express";

import {
  createSystem,
} from "../controllers/system.js";

const router = express.Router();

router.post("/", createSystem);

export default router;