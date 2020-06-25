const productService = require('../services/productService');
const constants = require('../constants');

// @desc  create product
const createProduct = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constants.product.PRODUCT_CREATED;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

// @desc show all products
const getAllProducts = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await productService.getAllProducts(req.query);
        response.status = 200;
        response.message = constants.product.PRODUCT_FETCHED;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

// @desc get product by id
const getProductById = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await productService.getProductById(req.params);
        response.status = 200;
        response.message = constants.product.PRODUCT_FETCHED;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

const updateProductById = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await productService.updateProductById({
            id: req.params.id,
            updatePayload: req.body
        });
        response.status = 200;
        response.message = constants.product.PRODUCT_UPDATED;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

const deleteProduct = async (req, res) => {
    let response = { ...constants.defaultResponse }
    try {
        let request = await productService.deleteProduct(req.params);
        response.status = 200;
        response.message = constants.product.PRODUCT_DELETED;
        response.body = request;
    } catch (err) {
        console.error(err)
        response.message = err.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}
module.exports = { createProduct, getAllProducts, getProductById, updateProductById, deleteProduct }