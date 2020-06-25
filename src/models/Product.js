const mongoose = require("mongoose");
const Joi = require('@hapi/joi');
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps: true,
    toObject: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
})
module.exports = mongoose.model('Product', ProductSchema)