import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createMarketItem = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.marketItem.create({
        data: { ...req.body },

      });
  
      const newMarketItem = await prisma.marketItem.findMany();
  
      return res.status(201).json({
        msg: "Market item successfully created",
        data: newMarketItem,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getMarketItems = async (req, res) => {
    try {
      const marketItems = await prisma.marketItem.findMany();
  
      if (marketItems.length === 0) {
        return res.status(404).json({ msg: "No items found" });
      }
  
      return res.json({ data: marketItems });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };


  export{
    createMarketItem,
    getMarketItems
  }