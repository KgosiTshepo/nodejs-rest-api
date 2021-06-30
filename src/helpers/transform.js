const transform = (obj) => {
	const productList = [];
	if (Array.isArray(obj)) {
		// eslint-disable-next-line no-restricted-syntax
		for (const value of obj) {
			productList.push(value.toObject());
		}
		return productList;
	}
	return obj.toObject();
};
module.exports = {transform};
