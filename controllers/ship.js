import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createShip = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.ship.create({
        data: { ...req.body },

      });
  
      const newShip = await prisma.ship.findMany();
  
      return res.status(201).json({
        msg: "Ship successfully created",
        data: newShip,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getShips = async (req, res) => {
    try {
      const ships = await prisma.ship.findMany();
  
      if (ships.length === 0) {
        return res.status(404).json({ msg: "No ships found" });
      }
  
      return res.json({ data: ships });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getShip = async (req, res) => {
    try {
      const ship = await prisma.ship.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!ship) {
        return res
          .status(404)
          .json({ msg: `No ship with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: ship,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateShip = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let shipUpdate = await prisma.ship.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!shipUpdate) {
        return res
          .status(404)
          .json({ msg: `No ship with the id: ${req.params.id} found` });
      }
  
      shipUpdate = await prisma.ship.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Ship with the id: ${req.params.id} successfully updated`,
        data: shipUpdate,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const deleteShip = async (req, res) => {
    try {
      const ship = await prisma.ship.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!ship) {
        return res
          .status(404)
          .json({ msg: `No ship with the id: ${req.params.id} found` });
      }
  
      await prisma.ship.delete({
        where: { id: Number(req.params.id) },
      });
  
      return res.json({
        msg: `Ship with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createShip,
    getShips,
    getShip,
    updateShip,
    deleteShip
  }