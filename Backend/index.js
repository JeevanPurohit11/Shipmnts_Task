const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const DbConnect = require('./config/db'); // Import your DbConnect function
const bookRoutes = require('./routes/bookRoutes'); // Import your routes
// Connect to MongoDB
DbConnect(); // Call your DbConnect function
const app = express();

// Define CORS options
const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000', // Ensure this matches the frontend URL
};

// Use CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


// Middleware
app.use(express.json());

// Use routes
app.use(bookRoutes); // Prefix routes with /api

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

