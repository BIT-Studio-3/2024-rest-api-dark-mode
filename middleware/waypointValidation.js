import Joi from "joi";

const validateWaypoint = (req, res, next) => {
  const waypointSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": "name should be a string",
      "string.empty": "name cannot be empty",
      "string.min": "name should have a minimum length of {#limit}",
      "string.max": "name should have a maximum length of {#limit}",
      "any.required": "name is required",
    }),
    type: Joi.string().min(3).max(100).required().messages({
      "string.base": "type should be a string",
      "string.empty": "type cannot be empty",
      "string.min": "type should have a minimum length of {#limit}",
      "string.max": "type should have a maximum length of {#limit}",
      "any.required": "type is required",
    }),
    systemId: Joi.number().integer().required().messages({
      "number.base": "systemId should be a number",
      "number.integer": "systemId should be an integer",
      "any.required": "systemId is required",
    }),
    xCoordinate: Joi.number().required().messages({
      "number.base": "xCoordinate should be a number",
      "any.required": "xCoordinate is required",
    }),
    yCoordinate: Joi.number().required().messages({
      "number.base": "yCoordinate should be a number",
      "any.required": "yCoordinate is required",
    }),
  });

  const { error } = waypointSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { validateWaypoint };