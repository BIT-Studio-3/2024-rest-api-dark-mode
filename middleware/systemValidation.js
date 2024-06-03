import Joi from "joi";

const validateSystem = (req, res, next) => {
  const systemSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": "name should be a string",
      "string.empty": "name cannot be empty",
      "string.min": "name should have a minimum length of {#limit}",
      "string.max": "name should have a maximum length of {#limit}",
      "any.required": "name is required",
    }),
    xCoordinate: Joi.number().required().messages({
      "number.base": "xCoordinate should be a number",
      "any.required": "xCoordinate is required",
    }),
    yCoordinate: Joi.number().required().messages({
      "number.base": "yCoordinate should be a number",
      "any.required": "yCoordinate is required",
    }),
    faction: Joi.string().min(3).max(100).optional().messages({
      "string.base": "faction should be a string",
      "string.empty": "faction cannot be empty",
      "string.min": "faction should have a minimum length of {#limit}",
      "string.max": "faction should have a maximum length of {#limit}",
    }),
  });

  const { error } = systemSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { validateSystem };