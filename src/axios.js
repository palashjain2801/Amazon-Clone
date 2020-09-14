import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-4846f/us-central1/api' //API URL
});
export default instance;