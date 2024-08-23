import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Our base of project
    withCredentials: true,
});

//added file
export const uploadFile = (formData) => api.post('http://localhost:5500/api/upload', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Used Pagination for fetching data
export const getBooks = (page, limit) => api.get(`http://localhost:5500/api/books?page=${page}&limit=${limit}`);
