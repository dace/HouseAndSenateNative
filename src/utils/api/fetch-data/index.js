import axios  from 'axios';
import API_KEY from '../config/api-key';

const headers = {
  headers: { 
    'X-API-Key': API_KEY 
  },
};

const fetchData = endpointURL => {
  return new Promise((resolve, reject) => {
    axios.get(endpointURL, headers)
    .then(res => resolve(res.data.results[0]))
    .catch(err => reject(err));
  });
}

export default fetchData;