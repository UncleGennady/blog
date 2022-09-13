const express = require('express');
const ContactController = require('./../controller/contact-controller');
const contactController = new ContactController;

const router = express.Router();

router.get('/contacts',contactController.getContacts );

module.exports = router