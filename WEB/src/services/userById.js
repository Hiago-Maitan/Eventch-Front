import axios from 'axios'

const userById = axios.get(`https://eventech.outsystemscloud.com/Core/rest/User/v1/38`);

export default userById;