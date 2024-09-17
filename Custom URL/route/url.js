const express=require('express');
const {handleGenerateNewShortURL} =require('../Controller/url');
const {handleGetAnalytics} =require('../Controller/url');

 const  router=express.Router();

router.post("/",handleGenerateNewShortURL);

router.get('/analytics/:shortId',handleGetAnalytics)
module.exports=router;