import Joi from "joi";

const validatePostShip = (req, res, next) => {
  const shipSchema = Joi.object({
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
    price: Joi.number().positive().required().messages({
      "number.base": "price should be a number",
      "number.positive": "price should be a positive number",
      "any.required": "price is required",
    }),
    shipyardId: Joi.number().integer().required().messages({
      "number.base": "shipyardId should be a number",
      "number.integer": "shipyardId should be an integer",
      "any.required": "shipyardId is required",
    }),
  });

  const { error } = shipSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { 
    validatePostShip 
};