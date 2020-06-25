const transform = (obj) => {
    let productList = []
    if (Array.isArray(obj)) {
        for (const value of obj) {
            productList.push(value.toObject())
        }
        return productList;
    }
    return obj.toObject();
}
module.exports = { transform }