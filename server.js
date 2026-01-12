const express = require('express');
const mongodb = require('./db/connect');
const contactsRoutes = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes
app.use('/contacts', contactsRoutes);

// Initialize database and start server
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});
