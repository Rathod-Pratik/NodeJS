const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String
    }
}, { timestamps: true })

const User = mongoose.model("users", userSchema);

module.exports=User;
