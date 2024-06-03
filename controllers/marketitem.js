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


  export{
    createMarketItem
  }