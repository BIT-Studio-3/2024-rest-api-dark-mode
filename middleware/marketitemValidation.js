import Joi from "joi";

const validatePostMarketItem = (req, res, next) => {
  const marketItemSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": "name should be a string",
      "string.empty": "name cannot be empty",
      "string.min": "name should have a minimum length of {#limit}",
      "string.max": "name should have a maximum length of {#limit}",
      "any.required": "name is required",
    }),
    price: Joi.number().positive().required().messages({
      "number.base": "price should be a number",
      "number.positive": "price should be a positive number",
      "any.required": "price is required",
    }),
    quantity: Joi.number().integer().positive().required().messages({
      "number.base": "quantity should be a number",
      "number.integer": "quantity should be an integer",
      "number.positive": "quantity should be a positive number",
      "any.required": "quantity is required",
    }),
    marketId: Joi.number().integer().required().messages({
      "number.base": "marketId should be a number",
      "number.integer": "marketId should be an integer",
      "any.required": "marketId is required",
    }),
  });

  const { error } = marketItemSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { 
    validatePostMarketItem 
};