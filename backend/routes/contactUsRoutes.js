const express = require('express')
const router = express.Router()

// controller function
const { contactUs } = require('../controllers/contactUs');

router.post('/contact-us', contactUs);

module.exports = router;