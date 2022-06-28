import axios from "axios"

const API_ROOT = 'https://jsonplaceholder.typicode.com'

const postsUrl = `${API_ROOT}/users`;

export function get() {
    return axios.get(postsUrl);
}