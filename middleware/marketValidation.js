import Joi from "joi";

const validatePostMarket = (req, res, next) => {
  const marketSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": "name should be a string",
      "string.empty": "name cannot be empty",
      "string.min": "name should have a minimum length of {#limit}",
      "string.max": "name should have a maximum length of {#limit}",
      "any.required": "name is required",
    }),
    description: Joi.string().min(3).max(255).required().messages({
      "string.base": "description should be a string",
      "string.empty": "description cannot be empty",
      "string.min": "description should have a minimum length of {#limit}",
      "string.max": "description should have a maximum length of {#limit}",
      "any.required": "description is required",
    }),
    xCoordinate: Joi.number().required().messages({
      "number.base": "xCoordinate should be a number",
      "any.required": "xCoordinate is required",
    }),
    yCoordinate: Joi.number().required().messages({
      "number.base": "yCoordinate should be a number",
      "any.required": "yCoordinate is required",
    }),
    waypointId: Joi.number().integer().required().messages({
      "number.base": "waypointId should be a number",
      "number.integer": "waypointId should be an integer",
      "any.required": "waypointId is required",
    }),
  });

  const { error } = marketSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { 
    validatePostMarket 
};