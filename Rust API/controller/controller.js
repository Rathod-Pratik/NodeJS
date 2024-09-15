const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const alBDusers = await User.find({});
    return res.json(alBDusers);
}

async function GetUserById(req,res){
    const user =await User.findById(req.params.id);
    if(!user) return res.status(404).json({error :"User not found"});
     return res.json(user);
}

async function UpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastname:"Changed by user"});
    return res.json({status :"success"});
}

async function DeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
}
async function HandleUserById(req,res){
    const body = req.body;
    if (!body || !body.first || !body.last || !body.email || !body.gender || !body.job) {
        return res.status(400).json({ message: "All fields are require" })
    }
    const result = await User.create({
        firstname: body.first,
        lastname: body.last,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job,
    })
    console.log(result);
    return res.status(201).json({ message: "Success",id: result._id});
}
module.exports={handleGetAllUsers,GetUserById,UpdateUserById,DeleteUserById,HandleUserById};