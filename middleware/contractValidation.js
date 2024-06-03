import Joi from "joi";

const validateContract = (req, res, next) => {
  const contractSchema = Joi.object({
    type: Joi.string().required().min(1).max(100).messages({
      "string.base": "type should be a string",
      "string.empty": "type cannot be empty",
      "string.min": "type should have a minimum length of {#limit}",
      "string.max": "type should have a maximum length of {#limit}",
      "any.required": "type is required",
    }),
    resource: Joi.string().required().min(1).max(100).messages({
      "string.base": "resource should be a string",
      "string.empty": "resource cannot be empty",
      "string.min": "resource should have a minimum length of {#limit}",
      "string.max": "resource should have a maximum length of {#limit}",
      "any.required": "resource is required",
    }),
    location: Joi.string().required().min(1).max(100).messages({
      "string.base": "location should be a string",
      "string.empty": "location cannot be empty",
      "string.min": "location should have a minimum length of {#limit}",
      "string.max": "location should have a maximum length of {#limit}",
      "any.required": "location is required",
    }),
    deadline: Joi.date().required().messages({
      "date.base": "deadline should be a valid date",
      "any.required": "deadline is required",
    }),
    onAccepted: Joi.number().integer().required().messages({
      "number.base": "onAccepted should be a number",
      "number.integer": "onAccepted should be an integer",
      "any.required": "onAccepted is required",
    }),
    onFulfilled: Joi.number().integer().required().messages({
      "number.base": "onFulfilled should be a number",
      "number.integer": "onFulfilled should be an integer",
      "any.required": "onFulfilled is required",
    }),
    tradeSymbol: Joi.string().required().min(1).max(100).messages({
      "string.base": "tradeSymbol should be a string",
      "string.empty": "tradeSymbol cannot be empty",
      "string.min": "tradeSymbol should have a minimum length of {#limit}",
      "string.max": "tradeSymbol should have a maximum length of {#limit}",
      "any.required": "tradeSymbol is required",
    }),
    destinationSymbol: Joi.string().required().min(1).max(100).messages({
      "string.base": "destinationSymbol should be a string",
      "string.empty": "destinationSymbol cannot be empty",
      "string.min": "destinationSymbol should have a minimum length of {#limit}",
      "string.max": "destinationSymbol should have a maximum length of {#limit}",
      "any.required": "destinationSymbol is required",
    }),
    unitsRequired: Joi.number().integer().required().messages({
      "number.base": "unitsRequired should be a number",
      "number.integer": "unitsRequired should be an integer",
      "any.required": "unitsRequired is required",
    }),
    unitsFulfilled: Joi.number().integer().required().messages({
      "number.base": "unitsFulfilled should be a number",
      "number.integer": "unitsFulfilled should be an integer",
      "any.required": "unitsFulfilled is required",
    }),
  });

  const { error } = contractSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { validateContract };