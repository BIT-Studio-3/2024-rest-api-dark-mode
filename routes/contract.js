import express from "express";

import {
    createContract,
    getContracts,
    getContract,
    updateContract,
    deleteContract,
} from "../controllers/contract.js";

const router = express.Router();

router.post("/", createContract);
router.get("/", getContracts);
router.get("/:id", getContract);
router.put("/:id", updateContract);
router.delete("/:id", deleteContract);

export default router;