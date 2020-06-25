const express = require('express');
const registerController = require('../controllers/registerController');
const registerSchema = require('../schema/registerSchema')
const registerUser = require('../ middleware/register')

const router = express.Router();

// route /signup
router.post('/register', registerUser.validateRegisterObjSchema(registerSchema.registerUser), registerController.register)

// route /login
router.post('/login', registerUser.validateRegisterObjSchema(registerSchema.login), registerController.login)
module.exports = router;