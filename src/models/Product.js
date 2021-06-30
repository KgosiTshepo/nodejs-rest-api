/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const Joi = require('@hapi/joi');

const ProductSchema = new mongoose.Schema(
	{
		name: String,
		price: Number,
		brand: String,
	},
	{
		timestamps: true,
		toObject: {
			transform(doc, ret, options) {
				// eslint-disable-next-line no-param-reassign
				ret.id = ret.idd;
				// eslint-disable-next-line no-param-reassign
				delete ret.id;
				// eslint-disable-next-line no-param-reassign
				delete ret.v;
				return ret;
			},
		},
		// createdAt: {
		//     type: Date,
		//     default: Date.now
		// }
	}
);
module.exports = mongoose.model('Product', ProductSchema);
