const express=require('express');
const {handleuserSignup}=require('../Controller/user')
const router=express.Router();

router.post('/',handleuserSignup)

module.exports=router;