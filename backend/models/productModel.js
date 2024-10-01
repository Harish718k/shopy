const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    discription: String,
    ratings: String,
    images: [
        {
            image: String,
        }
    ],
    catrgory: String,
    seller: String,
    stock: String,
    numOfReviwes: String,
    createdAt: Date
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;