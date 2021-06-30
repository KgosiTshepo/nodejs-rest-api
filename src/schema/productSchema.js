const Joi = require('@hapi/joi');

const createProductSchema = Joi.object({
	name: Joi.string().required(),
	brand: Joi.string().required(),
	price: Joi.number().required(),
});

const paginationSchema = Joi.object({
	skip: Joi.string(),
	limit: Joi.string(),
});

const updateProductByIdSchema = Joi.object({
	name: Joi.string(),
	brand: Joi.string(),
	price: Joi.number(),
});
module.exports = {
	createProductSchema,
	paginationSchema,
	updateProductByIdSchema,
};
