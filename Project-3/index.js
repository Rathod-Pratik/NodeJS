const http = require('http');
const fs = require('fs');
const url = require('url');
const express=require('express');

const app=express();

app.get('/About',(request,response)=>{
    response.end(`This is about page \n Your name is ${request.query.name} and your age is ${request.query.age}`)
});
app.get('/',(request,response)=>{
    response.end(`This is home page \n Your name is ${request.query.name} and your age is ${request.query.age}`)
});
app.get('/Contect',(request,response)=>{
    response.end(`this is contect page \n Your name is ${request.query.name} and your age is ${request.query.age}`)
});


app.listen(8000, () => console.log("Server is running on port 8000"));
