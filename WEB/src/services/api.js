import axios from 'axios';

const api = axios.create({
	baseURL: 'https://eventech-back.herokuapp.com/v2/users',
});

export default api;