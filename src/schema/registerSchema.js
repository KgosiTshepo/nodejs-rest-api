const Joi = require('@hapi/joi');

const registerUser = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});
const login = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

module.exports = {registerUser, login};
