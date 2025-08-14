const express = require('express')
const userRouter = express.Router()

const { addUser, getUser, deleteUser, loginUser } = require('../controllers/userControllers')

userRouter.post('/adduser', addUser)
userRouter.get('/getuser', getUser)
userRouter.delete('/deleteuser/:id', deleteUser)

userRouter.post('/login', loginUser)

module.exports = userRouter 