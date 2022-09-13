const Contact = require('./../models/contact');
const createPath = require('./../utils/create-path');
const handleError = require('./../utils/handle-error');

class ContactController {

    getContacts = (req, res) => {
        const title = 'Contacts';
        Contact
            .find()
            .then(contacts => res.render(createPath('contacts'), { contacts, title }))
            .catch((error) => handleError(res, error));
    };

}

module.exports = ContactController;

