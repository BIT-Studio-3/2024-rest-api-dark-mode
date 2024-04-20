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

  const getInstitutions = async (req, res) => {
    try {
      const institutions = await prisma.institution.findMany();
  
      if (institutions.length === 0) {
        return res.status(404).json({ msg: "No institutions found" });
      }
  
      return res.json({ data: institutions });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getInstitution = async (req, res) => {
    try {
      const institution = await prisma.institution.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!institution) {
        return res
          .status(404)
          .json({ msg: `No institution with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: institution,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateInstitution = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let institution = await prisma.institution.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!institution) {
        return res
          .status(404)
          .json({ msg: `No institution with the id: ${req.params.id} found` });
      }
  
      institution = await prisma.institution.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Institution with the id: ${req.params.id} successfully updated`,
        data: institution,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export {
    createInstitution,
    getInstitutions,
    getInstitution,
    updateInstitution,
  };