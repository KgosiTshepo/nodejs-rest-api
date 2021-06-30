/* eslint-disable no-underscore-dangle */
/* eslint-disable no-process-exit */
/* eslint-disable no-param-reassign */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const constants = require('../constants/index');
const User = require('../models/User');
const {transform} = require('../helpers/transform');

const register = async ({email, password}) => {
	try {
		const user = await User.findOne({email});
		if (user) throw Error(constants.userRegisterMessage.DUPLICATE_EMAIL);

		// auto-gen a salt and hash
		password = await bcrypt.hash(password, 12);
		console.log(password);
		const newUser = new User({email, password});

		const response = await newUser.save();
		return transform(response);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const login = async ({email, password}) => {
	try {
		const user = await User.findOne({email});
		if (!user) throw Error(constants.userRegisterMessage.USER_NOT_FOUND);

		// compare passwords
		console.log(password, `compare to ${user.password}`);
		const match = await bcrypt.compare(password, user.password);
		if (!match) throw Error('Incorrect passord');

		// grant access token
		const token = jwt.sign({id: user._id}, process.env.SECRET, {
			expiresIn: '1h',
		});
		return token;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
module.exports = {register, login};
