/**
 * No React é muito comum utilizar o AXIOS para ser o Client.
 */

 import axios from 'axios';

 const api = axios.create({
     baseURL: 'http://localhost:3333',
 })

 export default api;