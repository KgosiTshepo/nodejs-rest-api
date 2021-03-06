const JWT = require('jsonwebtoken');
const constants = require('../constants/index');

const validateAuthorizationToken = (req, res, next) => {
	const response = {...constants.defaultResponse};
	try {
		// @Authorization parameter missing
		if (!req.headers.authorization) throw Error('Token is missing');
		const token = req.headers.authorization.split('Bearer')[1].trim();

		const decodedToken = JWT.verify(token, process.env.SECRET);
		console.log(`Decoded token ${JSON.stringify(decodedToken)}`);
		return next();
	} catch (err) {
		console.error(JSON.stringify(err));
	}
	return res.status(response.status).send(response);
};

module.exports = {validateAuthorizationToken};
