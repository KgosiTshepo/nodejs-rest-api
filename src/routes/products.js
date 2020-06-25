const express = require('express')
const router = express.Router();

const productController = require('../controllers/productController');
const product = require('../ middleware/product')
const productSchema = require('../schema/productSchema')
const validateToken = require('../helpers/validateAuthToken')


// route  POST/product
router.post('/product', validateToken.validateAuthorizationToken, product.validateObjSchema(productSchema.createProductSchema), productController.createProduct);

// route  GET/products
router.get('/products', validateToken.validateAuthorizationToken, product.validateQueryParamsSchema(productSchema.paginationSchema), productController.getAllProducts);

// route GET /products/:id
router.get('/product/:id', validateToken.validateAuthorizationToken, productController.getProductById);

// route PUT /product/:id
router.put('/products/:id', validateToken.validateAuthorizationToken, product.validateObjSchema(productSchema.updateProductByIdSchema), productController.updateProductById);

//router DELETE /delete/:id
router.delete('/products/:id', validateToken.validateAuthorizationToken, productController.deleteProduct);
module.exports = router;