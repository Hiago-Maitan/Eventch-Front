import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8080/v2/users',
});

export default api;