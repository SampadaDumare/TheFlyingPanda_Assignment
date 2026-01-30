const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection to mongo successful")
    } catch (error) {
        console.error("Connection to mongo failed", error.message);
    }
}

module.exports = connectToMongo;