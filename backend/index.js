const connectToMongo = require('./db.js');
const cors = require('cors'); // Import CORS
const express = require('express');

connectToMongo();
const app = express();
const port = 5000;

// Enable CORS for all routes and origins
app.use(cors()); 

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes.js'));

// Start the server
app.listen(port, () => {
  console.log(`iNotebook app listening on port http://localhost:${port}`);
});
