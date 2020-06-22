import axios from 'axios';

const create = axios.create({
    baseURL: 'https://eventech.outsystemscloud.com/Core/rest/Place/v2'
})

export {create};