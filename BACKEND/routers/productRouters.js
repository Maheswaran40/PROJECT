const express = require('express')
const router = express.Router()

const { getProducts, deleteProduct, updateProduct, addProduct } = require('../controllers/productControllers')
router.post('/add', addProduct)
router.get('/list', getProducts)
router.delete('/delete/:id', deleteProduct)
router.put('/update/:id', updateProduct)

module.exports = router 