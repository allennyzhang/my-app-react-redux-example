import axios from "axios"

const API_ROOT = 'https://jsonplaceholder.typicode.com'

const postsUrl = `${API_ROOT}/posts`;

export function get() {
    return axios.get(postsUrl);
}

export function add(post) {
    return axios.post(postsUrl, post);
}