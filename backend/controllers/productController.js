const productModel = require('../models/productModel');

//Get products API - /api/v1/product
exports.getProducts =async (req, res, next) => {

    const products = await productModel.find();
    res.json({
        success: true,
        products
    })
}


//Get single products API - /api/v1/product/:id
exports.getSingleProduct =async (req, res, next) => {
    try{
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: "unable to get product with that ID!"
        })
    }
    
}