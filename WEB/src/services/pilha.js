import axios from 'axios';

const pilha = axios.create({
    baseURL:'https://eventech.outsystemscloud.com/Core/rest/Event/v1/pilha'
})

export {pilha};