const express = require('express');
const Product = require('./Product');
const app = express();
require("./config");
app.use(express.json());


app.post('/product',async(req,res)=>{
    let product= new Product(req.body);
    let result= await product.save();
    res.send(result)
})

app.listen(7000,()=>{
    console.log("listening the port 7000")
});