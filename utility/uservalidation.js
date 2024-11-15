import Joi from "joi";
export const registerSchema = Joi.object({
  username: Joi.string().max(10).required(),
  email: Joi.string().required(),
  password: Joi.string().required().min(6).max(11),
});

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required().min(6).max(11),
});
