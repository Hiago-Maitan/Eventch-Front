import axios from 'axios'

const event = ({eventId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v2/${eventId}`);

export {event};