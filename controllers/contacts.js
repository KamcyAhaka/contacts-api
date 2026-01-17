const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

// GET all contacts
const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection('contacts').find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single contact by ID
const getSingle = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').findOne({ _id: contactId });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create a new contact
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    
    // Validate all required fields
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ 
        error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' 
      });
    }
    
    const contact = { firstName, lastName, email, favoriteColor, birthday };
    const result = await mongodb.getDb().collection('contacts').insertOne(contact);
    
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update a contact by ID
const updateContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    
    // Validate all required fields
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ 
        error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' 
      });
    }
    
    const contact = { firstName, lastName, email, favoriteColor, birthday };
    const result = await mongodb.getDb().collection('contacts').replaceOne(
      { _id: contactId },
      contact
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a contact by ID
const deleteContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').deleteOne({ _id: contactId });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };
