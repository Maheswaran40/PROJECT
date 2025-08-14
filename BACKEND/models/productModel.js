const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    img : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel 