import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createShipyard = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.shipyard.create({
        data: { ...req.body },

      });
  
      const newShipyard = await prisma.shipyard.findMany();
  
      return res.status(201).json({
        msg: "Shipyard successfully created",
        data: newShipyard,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getShipyards = async (req, res) => {
    try {
      const shipyards = await prisma.shipyard.findMany();
  
      if (shipyards.length === 0) {
        return res.status(404).json({ msg: "No shipyards found" });
      }
  
      return res.json({ data: shipyards });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getShipyard = async (req, res) => {
    try {
      const shipyard = await prisma.shipyard.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!shipyard) {
        return res
          .status(404)
          .json({ msg: `No shipyard with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: shipyard,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateShipyard= async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let shipyard = await prisma.shipyard.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!shipyard) {
        return res
          .status(404)
          .json({ msg: `No shipyard with the id: ${req.params.id} found` });
      }
  
      shipyard = await prisma.shipyard.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Shipyard with the id: ${req.params.id} successfully updated`,
        data: shipyard,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createShipyard,
    getShipyards,
    getShipyard,
    updateShipyard
  }