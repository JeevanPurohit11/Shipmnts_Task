
const router = require('express').Router();

const multer = require('multer');
const BookController = require('../controllers/bookController');

const upload = multer({ dest: 'uploads/' });

// Define routes
router.post('/api/upload', upload.single('file'), BookController.uploadFile);
router.get('/api/books', BookController.getBooks);

module.exports = router;
