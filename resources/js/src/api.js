const axios = window.axios;
const BASE_API_URL = 'http://localhost:8000/api'
export default {
    getAllUsers: () =>
        axios.get(`${BASE_API_URL}/users`),
}