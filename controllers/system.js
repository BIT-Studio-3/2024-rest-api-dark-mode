import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createSystem = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.system.create({
        data: { ...req.body },
      });
  
      const newSystems = await prisma.system.findMany();
  
      return res.status(201).json({
        msg: "System successfully created",
        data: newSystems,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getSystems = async (req, res) => {
    try {
      const systems = await prisma.system.findMany();
  
      if (systems.length === 0) {
        return res.status(404).json({ msg: "No systems found" });
      }
  
      return res.json({ data: systems });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getSystem = async (req, res) => {
    try {
      const system = await prisma.system.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!system) {
        return res
          .status(404)
          .json({ msg: `No system with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: system,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateSystem = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let system = await prisma.system.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!system) {
        return res
          .status(404)
          .json({ msg: `No system with the id: ${req.params.id} found` });
      }
  
      system = await prisma.system.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `System with the id: ${req.params.id} successfully updated`,
        data: system,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createSystem,
    getSystems,
    getSystem,
    updateSystem
  }