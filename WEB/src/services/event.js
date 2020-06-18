import axios from 'axios'

const event = ({eventId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v2/${eventId}`);

const eventList = axios.create({
    baseURL:'https://eventech.outsystemscloud.com/Core/rest/Event/v2/events'
});

const update = ({ eventId }) => axios.create({
    baseURL:`https://eventech.outsystemscloud.com/Core/rest/Event/v1/${eventId}`

})

export {event, eventList, update};