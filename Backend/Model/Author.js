const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Book schema (as a subdocument)
const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    isbnCode: {
        type: String,
        required: true,
    }
});

// Define the Author schema
const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // Enforce unique author names in the database
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    books: [bookSchema] // Array of books
}, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
});


module.exports = mongoose.model('Author', authorSchema, 'authors');
