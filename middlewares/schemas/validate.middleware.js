const validateSchema = (req, res, next, schema) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = schema.validate(req.body, options);

  if (error) {
    // on fail return comma separated errors
    return res.json({
      'error': `Validation error: ${error.details.map((x) => x.message).join(", ")}`,
      status: 400
    }).status(400);
  } else {
    // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
};

export default validateSchema;
