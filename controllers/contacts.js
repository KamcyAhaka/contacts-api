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

module.exports = { getAll, getSingle };
