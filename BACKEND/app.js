const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json({limit : '50mb'}))

const router = require("./routers/productRouters");
app.use('/product', router)

const userRouter = require("./routers/userRouters");
app.use('/user', userRouter)

const dotenv = require('dotenv');
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`Server Running on PORT ${process.env.PORT}`)
})

// 5000/product/add
// 5173

// cors -> cross origin resource sharing 