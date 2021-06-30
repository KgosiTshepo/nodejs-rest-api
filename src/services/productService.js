/* eslint-disable no-process-exit */
const Product = require('../models/Product');
const {transform} = require('../helpers/transform');

const createProduct = async (params) => {
	try {
		const product = new Product({...params});
		const response = await product.save();
		return transform(response);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const getAllProducts = async ({skip = 0, limit = 10}) => {
	try {
		const products = await Product.find({})
			.skip(+skip)
			.limit(+limit);
		return transform(products);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const getProductById = async ({id}) => {
	try {
		const product = await Product.findById(id);
		return transform(product);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const updateProductById = async ({id, updatePayload}) => {
	try {
		const product = await Product.findOneAndUpdate(
			{_id: id},
			updatePayload,
			{
				new: true,
			}
		);
		return transform(product);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const deleteProduct = async ({id}) => {
	try {
		const product = await Product.findByIdAndDelete(id);
		return transform(product);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = {
	createProduct,
	getAllProducts,
	getProductById,
	updateProductById,
	deleteProduct,
};
