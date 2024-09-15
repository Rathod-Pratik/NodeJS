const express = require('express');
const router =express.Router();
const {handleGetAllUsers,GetUserById,UpdateUserById,DeleteUserById,HandleUserById}= require('../controller/controller');


 router.route("/").get(handleGetAllUsers).post(HandleUserById);
router.route('/:id').get(GetUserById).patch(UpdateUserById).delete(DeleteUserById);



 module.exports=router;