const constants = require('../constants/index');
const registerService = require('../services/registerService');


// @desc  user signup
const register = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await registerService.register(req.body);
        response.status = 200;
        response.message = constants.userRegisterMessage.REGISTER;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

const login = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await registerService.login(req.body);
        response.status = 200;
        response.message = constants.userRegisterMessage.LOGIN;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

module.exports = { register, login }