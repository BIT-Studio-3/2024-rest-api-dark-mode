import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createContract = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.contract.create({
        data: { ...req.body },
      });
  
      const newContracts = await prisma.contract.findMany();
  
      return res.status(201).json({
        msg: "Contract successfully created",
        data: newContracts,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getContracts = async (req, res) => {
    try {
      const contracts = await prisma.contract.findMany();
  
      if (contracts.length === 0) {
        return res.status(404).json({ msg: "No contracts found" });
      }
  
      return res.json({ data: contracts });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getContract = async (req, res) => {
    try {
      const contract = await prisma.contract.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!contract) {
        return res
          .status(404)
          .json({ msg: `No contract with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: contract,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateContract = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let contract = await prisma.contract.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!contract) {
        return res
          .status(404)
          .json({ msg: `No contract with the id: ${req.params.id} found` });
      }
  
      contract = await prisma.contract.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Contract with the id: ${req.params.id} successfully updated`,
        data: contract,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  const deleteContract = async (req, res) => {
    try {
      const contract = await prisma.contract.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!contract) {
        return res
          .status(404)
          .json({ msg: `No contract with the id: ${req.params.id} found` });
      }
  
      await prisma.contract.delete({
        where: { id: Number(req.params.id) },
      });
  
      return res.json({
        msg: `Contract with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export {
    createContract,
    getContracts,
    getContract,
    updateContract,
    deleteContract,
  };