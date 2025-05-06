const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const ContactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{timeStamp: true});

module.exports = mongoose.model('ContactUs', ContactUsSchema)

