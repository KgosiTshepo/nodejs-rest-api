/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const UserSchema = new mongoose.Schema(
	{
		email: String,
		password: String,
	},
	{
		timestamps: true,
		toObject: {
			transform(doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
				return ret;
			},
		},
	}
);
module.exports = mongoose.model('User', UserSchema);
