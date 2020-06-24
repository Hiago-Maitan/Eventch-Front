import axios from 'axios'

const event = ({eventId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v2/${eventId}`);

const create = axios.create({
	baseURL: 'https://eventech.outsystemscloud.com/Core/rest/Event/v2'
});

const eventList = axios.create({
    baseURL:'https://eventech.outsystemscloud.com/Core/rest/Event/v2/events'
});

const update = ({ eventId }) => axios.create({
    baseURL:`https://eventech.outsystemscloud.com/Core/rest/Event/v1/${eventId}`

})

const exportacao = ({ eventId }) => axios.get(`https://eventech-back.herokuapp.com/events/file/${eventId}`)

const pilha = axios.get(`https://eventech-back.herokuapp.com/v2/historys`)

export {event, eventList, update, create, exportacao, pilha};