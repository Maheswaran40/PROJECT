const userModel = require("../models/userModel")

const addUser = async (req, res) => {
    try{
        const userData = userModel({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
        await userData.save()
        res.status(200).send('Data is Added')
    }
    catch(err){
        res.status(404).send(err)
    }
}

const getUser = async (req, res) => {
    try{
        const userList = await userModel.find()
        res.status(200).send(userList)
    }
    catch(err){
        res.status(404).send(err)
    }
}

const deleteUser = async (req, res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send('Data is Deleted')
    }
    catch(err){
        res.status(404).send(err)
    }
}

const loginUser = async (req, res) => {
    try{
        const user = await userModel.findOne({
            username : req.body.username,
            password : req.body.password
        })

        if(user){
            res.status(200).send(user)
        }
        else{
            res.status(404).send('User Not Found')
        }
    }
    catch(err){
        res.status(404).send(err)
    }
}

module.exports = { addUser, getUser, deleteUser, loginUser } 