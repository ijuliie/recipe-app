import React, { useState, useContext } from "react"
import { Form } from "react-bootstrap"
import { RecipeContext } from "../App"
import { userLogin } from "../Services/api-helper"

export default function Login(){
    const recipeContext = useContext(RecipeContext)
    // console.log(recipeContext)
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    console.log(recipeContext.user)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await userLogin(login)
        .then(response => {
            if(response.status === 200){
                console.log(response.status)
                recipeContext.setUser(response.data)
                recipeContext.setLoggedIn(true)
            }
        })
    }
    
    const handleChange = (e) => {
        const value = e.target.value
        setLogin({...login, [e.target.name]: value})
     }

    return (
        <Form onSubmit={ handleSubmit }>
        
        <div className='label'>
            <label>Username:</label>
        </div>
        <Form.Control 
            name="username"
            value={ login.username } 
            onChange={ handleChange } 
         />

        <div className='label'>
            <label>Password:</label>
        </div>
        <Form.Control  
            type='password'
            name="password" 
            value={ login.password } 
            onChange={ handleChange } 
        />

        <input className='login-submit' type="Submit" value="Login" />
    </Form>
    )
}