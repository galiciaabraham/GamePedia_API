const { body, param, validationResult } = require('express-validator');

const developerValidatorRules = () => {
  return [
    body('Name', 'Name of developer is required').notEmpty(),
    
    body('Founded', 'Founded Year is required').notEmpty(),
    // body('Founded', 'Enter a valid Year')
    // .matches(/^\d{4}$/),
    
    body('Headquarters', 'Headquarters is required').notEmpty(),
    
    body('President', 'President is required').notEmpty(),
    
    body('Website', 'Website is required').notEmpty(),
    // body('Website', 'Please enter a valid website. Example: "website.org"')
    // .matches(/^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/),
  ];
};

const devSearchByIdParamRule = () => {
  return [param('id', 'id param is required').notEmpty()];
};

const devSearchByNameParamRule = () => {
    return [param('name', 'name param is required').notEmpty()];
};

const validationCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorList = [];
  errors.array().map((error) => {
    errorList.push({ 
    [error.path]: error.msg })
});
  return res.status(400).json({
    errors: errorList
  });
};

module.exports = { 
    developerValidatorRules,
    devSearchByIdParamRule,
    devSearchByNameParamRule,
    validationCheck 
};