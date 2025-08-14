const productModel = require("../models/productModel")

const addProduct = async (req, res) => {
    try{
        const productData = productModel({
            img : req.body.img,
            name : req.body.name,
            category : req.body.category,
            desc : req.body.desc,
            price : req.body.price,
        })
        await productData.save()
        res.status(200).send('Data is Added')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const getProducts = async (req, res) => {
    try{
        const productList = await productModel.find()
        res.status(200).send(productList)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const deleteProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send('Data is Deleted')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const updateProduct = async (req, res) => {
    try{
        const updateData = await productModel.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.status(200).send(updateData)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

module.exports = { addProduct, getProducts, deleteProduct, updateProduct } 