const express=require('express');
const { ConnectToMongo } = require('./connection');
const app=express();

const Routers =require("./routes/url");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
/*Connect to mongodb database*/
ConnectToMongo("mongodb://127.0.0.1:27017/Bank-Data").then(()=>{
    console.log("ConnectToMongo suceess");
})

app.use('/accounts',Routers);

const PORT=8005;
app.listen(PORT,()=>console.log("ConnectToMongo sucessfully"));

