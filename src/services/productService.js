const Product = require('../Models/Product');
const { transform } = require('../helpers/transform');

const createProduct = async (params) => {
    try {
        let product = new Product({ ...params })
        let response = await product.save()
        return transform(response);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const getAllProducts = async ({ skip = 0, limit = 10 }) => {
    try {
        let products = await Product.find({}).skip(+skip).limit(+limit);
        return transform(products);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const getProductById = async ({ id }) => {
    try {
        let product = await Product.findById(id);
        return transform(product);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const updateProductById = async ({ id, updatePayload }) => {
    try {
        let product = await Product.findOneAndUpdate({ _id: id },
            updatePayload, { new: true }
        );
        return transform(product);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const deleteProduct = async ({ id }) => {
    try {
        let product = await Product.findByIdAndDelete(id);
        return transform(product);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = { createProduct, getAllProducts, getProductById, updateProductById, deleteProduct }
