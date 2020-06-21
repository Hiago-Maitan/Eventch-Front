import axios from 'axios'

const companyById = ({companyId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Company/v1/${companyId}`);


export {companyById};