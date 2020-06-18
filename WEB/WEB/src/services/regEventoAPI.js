import axios from 'axios';

const regEventoAPI = axios.create({
	baseURL: 'https://eventech.outsystemscloud.com/Core/rest/Event/v1'
});

export default regEventoAPI; 