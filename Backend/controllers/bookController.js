const Author = require('../Model/Author');
const xlsx = require('xlsx');
const fs = require('fs');
const uploadFile = async (req, res) => {
    let filePath;
    try {
        filePath = req.file.path;
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        for (const row of data) {
            const { 'Author name': name, 'Author email': email, 'Date of Birth': dob, Bookname, 'ISBN Code': isbnCode } = row;

            if (name && email) {
                // Check if an author with the same name already exists
                let existingAuthor = await Author.findOne({ name });

                if (existingAuthor) {
                    // Author exists, check if the book already exists for this author
                    const bookExists = existingAuthor.books.some(book => book.bookName === Bookname && book.isbnCode === isbnCode);
                    
                    if (!bookExists) {
                        // If the book doesn't exist, add it to the author's list
                        existingAuthor.books.push({ bookName: Bookname, isbnCode });
                        await existingAuthor.save();
                    }
                } else {
                    // New author, create and insert
                    const newAuthor = new Author({
                        name,
                        email,
                        dateOfBirth: new Date(dob), // Ensure DOB is correctly parsed
                        books: [{ bookName: Bookname, isbnCode }],
                    });
                    await newAuthor.save();
                }
            }
        }

        fs.unlinkSync(filePath); // Delete the uploaded file after processing
        res.json({ message: 'Data saved successfully!' });
    } catch (error) {
        console.error('Error processing Excel file', error);
        res.status(500).json({ error: 'Server error while processing the file' });
        if (filePath) {
            fs.unlinkSync(filePath); // Ensure file is deleted even if error occurs
        }
    }
};


const getBooks = async (req, res) => {
    let page = Math.max(1, parseInt(req.query.page) || 1);
    let limit = Math.max(1, parseInt(req.query.limit) || 10);

    const skip = (page - 1) * limit;

    try {
        // Fetch authors with pagination
        const authors = await Author.find().skip(skip).limit(limit);
        const totalAuthors = await Author.countDocuments();

        res.json({
            totalAuthors,
            totalPages: Math.ceil(totalAuthors / limit),
            currentPage: page,
            authors,  // Returning authors instead of books
        });
    } catch (error) {
        console.error('Error fetching books', error);
        res.status(500).json({ error: 'Server error' });
    }
};



module.exports = { uploadFile, getBooks };