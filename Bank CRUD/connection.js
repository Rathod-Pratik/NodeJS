const mongoose=require('mongoose');

async function ConnectToMongo(URL){
    return mongoose.connect(URL);
}

module.exports={ConnectToMongo};