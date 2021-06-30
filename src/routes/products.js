const express = require('express');
const productController = require('../controllers/productController');
const product = require('../ middleware/product');
const productSchema = require('../schema/productSchema');
const validateToken = require('../helpers/validateAuthToken');

const router = express.Router();

// @desc  POST/product
router.post(
	'/product',
	validateToken.validateAuthorizationToken,
	product.validateObjSchema(productSchema.createProductSchema),
	productController.createProduct
);

// @desc GET/products
router.get(
	'/products',
	validateToken.validateAuthorizationToken,
	product.validateQueryParamsSchema(productSchema.paginationSchema),
	productController.getAllProducts
);

// @desc GET /products/:id
router.get(
	'/product/:id',
	validateToken.validateAuthorizationToken,
	productController.getProductById
);

// @desc PUT /product/:id
router.put(
	'/products/:id',
	validateToken.validateAuthorizationToken,
	product.validateObjSchema(productSchema.updateProductByIdSchema),
	productController.updateProductById
);

// @desc DELETE /delete/:id
router.delete(
	'/products/:id',
	validateToken.validateAuthorizationToken,
	productController.deleteProduct
);
module.exports = router;
