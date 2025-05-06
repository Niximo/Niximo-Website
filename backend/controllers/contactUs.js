const ContactUs = require('../models/ContactUs')
const validator = require('validator')

const contactUs = async (req, res) => {

    const { name, email, message } = req.body;

    try {

        if(!validator.isEmail(email)){
            throw new Error('Invalid email');
        }

        const mail = await ContactUs.findOne({ email });

        if(mail) {
            throw new Error('Email already exists');
        }

        const user = await ContactUs.create({ name, email, message });

        //saving the user data
        res.status(201).json({ message: 'Details saved' });

    } catch(error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { contactUs }