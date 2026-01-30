const mongoose = require('mongoose');
const { Schema } = mongoose;

const alertSchema = new Schema({
    country:{
        type: String, 
        required: true
    },
    city:{
        type: String,
        required: true
    },
    visaType:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Alert', alertSchema);