import axios from 'axios';

// when deploy backend, need to change this to the url of the backend
const api = 'http://localhost:8000';

const getCities = async () => {
  const response = await axios.get(`${api}/cities`);
  return response.data;
}

const getCity = async (name) => {
  const response = await axios.get(`${api}/cities/${name}`);
  return response.data;
}

export {
    getCities, getCity,
};