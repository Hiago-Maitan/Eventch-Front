import axios from 'axios'

const event = ({eventId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v2/${eventId}`);

const eventList = axios.create({
    baseURL:'https://eventech.outsystemscloud.com/Core/rest/Event/v2/events'
});

export {event, eventList};