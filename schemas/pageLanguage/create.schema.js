import Joi from "joi";

const createSchema = Joi.object({
  page: Joi.string().required(),
  language: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.object().required(),
})

export default createSchema;