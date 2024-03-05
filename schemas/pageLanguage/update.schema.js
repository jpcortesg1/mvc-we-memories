import Joi from "joi";

const updateSchema = Joi.object({
  page: Joi.string(),
  language: Joi.string(),
  title: Joi.string(),
  content: Joi.object(),
})

export default updateSchema;