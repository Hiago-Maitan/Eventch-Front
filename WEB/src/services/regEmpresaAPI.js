import axios from 'axios';

const regEmpresaAPI = axios.create({
	baseURL: 'https://eventech.outsystemscloud.com/Core/rest/Company/v1',
});

export default regEmpresaAPI;