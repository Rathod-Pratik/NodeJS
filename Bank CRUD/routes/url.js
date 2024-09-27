const {handleShowData,handleAddData,handleDeleteAccout,handleUpdataAcccount,handleUpdateAccount,handleSearchData}= require('../Controller/index');
const express =require('express');
const router=express.Router();


router.route('/').get(handleShowData).post(handleAddData);

router.route('/:id').delete(handleDeleteAccout).patch(handleUpdateAccount).get(handleSearchData);

module.exports=router;