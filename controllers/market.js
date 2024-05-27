import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const createMarket = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.market.create({
        data: { ...req.body },

      });
  
      const newMarket = await prisma.market.findMany();
  
      return res.status(201).json({
        msg: "Marketplace waypoint successfully created",
        data: newMarket,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getMarkets = async (req, res) => {
    try {
      const markets = await prisma.market.findMany();
  
      if (markets.length === 0) {
        return res.status(404).json({ msg: "No markets found" });
      }
  
      return res.json({ data: markets });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getMarket = async (req, res) => {
    try {
      const market = await prisma.market.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!market) {
        return res
          .status(404)
          .json({ msg: `No marketplace with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: market,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateMarket = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let market = await prisma.market.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!market) {
        return res
          .status(404)
          .json({ msg: `No marketplace with the id: ${req.params.id} found` });
      }
  
      market = await prisma.market.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Marketplace with the id: ${req.params.id} successfully updated`,
        data: market,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const deleteMarket = async (req, res) => {
    try {
      const market = await prisma.market.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!market) {
        return res
          .status(404)
          .json({ msg: `No marketplace with the id: ${req.params.id} found` });
      }
  
      await prisma.market.delete({
        where: { id: Number(req.params.id) },
      });
  
      return res.json({
        msg: `Marketplace with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createMarket,
    getMarkets,
    getMarket,
    updateMarket,
    deleteMarket
  }