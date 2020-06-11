import axios from 'axios'

const event = ({eventId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v1/${eventId}`);

export {event};