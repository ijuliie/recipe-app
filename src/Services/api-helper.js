import axios from "axios"

const api = axios.create(
    {
        baseURL: "https://mighty-falls-81387.herokuapp.com/"
        // baseURL: "http://127.0.0.1:8000/"

    }
)

export const registerNewUser = async (user) => {
    const res = await api.post("/users/register/", user)
    return res
}

export const userLogin = async (user) => {
    const res = await api.post("/users/login/", user)
    return res
}

export const getUserRecipes = async (token) => {
    const res = await api.get("/recipes/", {
        headers: {
            authorization: `JWT ${token}`
        }
    })
    return res
}

export const createUserRecipe = async (recipe, token) => {
    const res = await api.post("/recipes/", recipe, {
        headers: {
            authorization: `JWT ${token}`
        }
    })
    return res
}