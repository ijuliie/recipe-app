import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://mighty-falls-81387.herokuapp.com/'
        // baseURL: 'http://127.0.0.1:8000/'

    }
)

export const registerNewUser = async (user) => {
    const res = await api.post('/users/register/', user)
    return res
}

export const userLogin = async (user) => {
    const res = await api.post('/users/login/', user)
    return res
}