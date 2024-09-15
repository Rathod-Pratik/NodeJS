const express = require('express');
const app = express();

const {connectMongoDB}=require('./connection/connection')
const UserRouter=require('./routes/user')
const {logReqRes}=require('./middlewares')

//middleware
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"));

//Connect to mongoDB
connectMongoDB("mongodb://127.0.0.1:27017/myDB").then(()=>{
    console.log("mongoDB connected")
})

//Use router 
app.use("/api/users",UserRouter);


const PORT = 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`))