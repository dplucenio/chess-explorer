import axios from 'axios';

const baseURL = 'https://www.countryflags.io/';

const countryFlagsApi = axios.create({
  baseURL
})

export default countryFlagsApi;

export { baseURL };