const express= require('express');
const path=require('path')

const errorMiddleware = require('./middlewares/error')
const products= require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')
const cookieParser = require('cookie-parser')

const app=express();

app.use(cookieParser());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use('/api/v1/',products)
app.use('/api/v1/',auth)
app.use('/api/v1/',order)

app.use(errorMiddleware)
module.exports=app;