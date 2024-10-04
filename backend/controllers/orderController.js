const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

//Create order - /api/v1/order
exports.createOrder =async (req, res, next) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item)=> (acc + item.product.price * item.qty), 0));
    const status = 'pending';

    const order = await orderModel.create({cartItems, amount, status})
    // Udating product stock

    cartItems.forEach(async(item)=>{
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.itemQuantity;
        await product.save();
    })

    res.json({
        success: true,
        order
    })
}

