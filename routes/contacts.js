const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET all contacts
router.get(
  '/',
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Get all contacts'
  // #swagger.responses[200] = { description: 'Successfully retrieved all contacts' }
  contactsController.getAll
);

// GET single contact by ID
router.get(
  '/:id',
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Get a single contact by ID'
  // #swagger.parameters['id'] = { description: 'Contact ID' }
  // #swagger.responses[200] = { description: 'Successfully retrieved the contact' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  contactsController.getSingle
);

// POST create a new contact
router.post(
  '/',
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Create a new contact'
  /* #swagger.parameters['body'] = {
      in: 'body',
      description: 'Contact data',
      required: true,
      schema: { $ref: '#/definitions/Contact' }
  } */
  // #swagger.responses[201] = { description: 'Contact created successfully' }
  // #swagger.responses[400] = { description: 'Missing required fields' }
  contactsController.createContact
);

// PUT update a contact by ID
router.put(
  '/:id',
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Update a contact by ID'
  // #swagger.parameters['id'] = { description: 'Contact ID' }
  /* #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated contact data',
      required: true,
      schema: { $ref: '#/definitions/Contact' }
  } */
  // #swagger.responses[204] = { description: 'Contact updated successfully' }
  // #swagger.responses[400] = { description: 'Missing required fields' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  contactsController.updateContact
);

// DELETE a contact by ID
router.delete(
  '/:id',
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Delete a contact by ID'
  // #swagger.parameters['id'] = { description: 'Contact ID' }
  // #swagger.responses[200] = { description: 'Contact deleted successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
  contactsController.deleteContact
);

module.exports = router;
