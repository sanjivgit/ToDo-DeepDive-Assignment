import axios from '../axios'

export async function apiCall(credentials) {
    const { method, url, payload } = credentials;
    let query = {
        method,
        url
    }
    if (payload) {
        query.data = payload
    }
    try {
        return await axios(query)
    } catch (error) {
        console.log(error)
    }
}
