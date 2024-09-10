import express from 'express';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';
import path from "path"
import dotenv from 'dotenv'


const app = express()   //1
const PORT = process.env.PORT || 7000
app.use(express.json())  //allows us to accept json data in the body of the request

app.use("/api/products",productRoutes)


const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

// using postman to test the above code

app.listen(PORT, () => {
    connectDB()  //5
    console.log(`server started at http://localhost:` + PORT)   //2
})

