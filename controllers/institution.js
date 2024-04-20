import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createInstitution = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.institution.create({
        data: { ...req.body },
      });
  
      const newInstitutions = await prisma.institution.findMany();
  
      return res.status(201).json({
        msg: "Institution successfully created",
        data: newInstitutions,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export {
    createInstitution,
  };