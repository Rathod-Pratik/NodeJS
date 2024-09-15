const mongoose = require('mongoose');

async function connectMongoDB(mongooshUrl) {
    return mongoose.connect(mongooshUrl);
}

module.exports ={connectMongoDB};