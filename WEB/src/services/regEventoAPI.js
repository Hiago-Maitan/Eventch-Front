import axios from 'axios';

const regEventoAPI = axios.create({
	baseURL: 'https://eventech.outsystemscloud.com/Core/rest/Event/v2'
});

export default regEventoAPI; 