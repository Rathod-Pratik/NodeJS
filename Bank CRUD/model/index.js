const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Account_no: {
        type: Number,
        unique: true,
        required: true
    },
    Name: {
        type: String,
        required: true  
    },
    IFSC: {
        type: String,   
        required: true
    },
    PIN: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("bank", userSchema);

module.exports = User;
