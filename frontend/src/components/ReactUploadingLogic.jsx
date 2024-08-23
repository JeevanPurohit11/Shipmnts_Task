import React, { useState, useEffect } from 'react';
import { uploadFile, getBooks } from '../services/api';

const ReactUploadingLogic = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [authors, setAuthors] = useState([]);
    const [page, setPage] = useState(1);
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleUpload = async () => {
        if (!file) {
            setMessage('Select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await uploadFile(formData);
            setMessage(res.data.message);
            setFileUploaded(true);
            fetchBooks();
        } catch (error) {
            console.error('Error while uploading:', error);
            setMessage('Unable to upload file.');
        }
    };

    const fetchBooks = async () => {
        try {
            const res = await getBooks(page, 5);
            const { authors } = res.data;
            setAuthors(authors || []);
        } catch (error) {
            console.error('Error fetching books:', error);
            setMessage('Unable to fetch books.');
        }
    };

    useEffect(() => {
        if (fileUploaded) {
            fetchBooks();
        }
    }, [page, fileUploaded]);

    return (
        <div>
            <h2>Upload Excel File</h2>
            <input type="file" name='file' onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
            {fileUploaded && authors.length === 0 ? (
                <p>No authors found.</p>
            ) : (
                authors.length > 0 && (
                    <div>
                        <h3>Authors</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Author Name</th>
                                    <th>Author Email</th>
                                    <th>Date of Birth</th>
                                    <th>Book Name</th>
                                    <th>ISBN Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authors.map((author, index) => (
                                    <React.Fragment key={index}>
                                        {author.books.map((book, i) => (
                                            <tr key={i}>
                                                {i === 0 ? (
                                                    <>
                                                        <td>{author.name}</td>
                                                        <td>{author.email}</td>
                                                        <td>{new Date(author.dateOfBirth).toLocaleDateString()}</td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </>
                                                )}
                                                <td>{book.bookName}</td>
                                                <td>{book.isbnCode}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            )}
        </div>
    );
};

export default ReactUploadingLogic;
