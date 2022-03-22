const express = require('express');

const router = express.Router();

const {
  showAllContacts,
  createContact,
  showContact,
  deleteContact,
  searchContacts,
  editContact,
} = require('../controllers/contactsController');

// '/api/contacts'

router.get('/', showAllContacts);
router.post('/', createContact);
router.get('/:id', showContact);
router.delete('/:id', deleteContact);
router.put('/:id', editContact);
router.post('/search', searchContacts); // 'http://localhost:5000/api/contacts/search'

module.exports = router;
