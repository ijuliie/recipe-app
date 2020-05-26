import React, { useState, useContext } from "react"
import { registerNewUser } from "../Services/api-helper"
import { Form } from "react-bootstrap"
import { RecipeContext } from "../App"

export default function Register(props){
    const recipeContext = useContext(RecipeContext)
    console.log(recipeContext)
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await registerNewUser(newUser).then(response => {
            if(response.status === 201){
                // console.log(response.status)
                recipeContext.setUser(response.data)
                // console.log(recipeContext.user)
                recipeContext.setLoggedIn(true)
            }
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewUser({...newUser, [e.target.name]: value})
     }


    return (
        <>
        <Form onSubmit={ handleSubmit }>
            <div className="label">
                <label>First name:</label>
            </div>
            <Form.Control 
                name="first_name" 
                type="text" 
                value={newUser.first_name} 
                onChange={ handleChange }  
            />
    
            <div className="label">
                <label>Last name:</label>
            </div>
            <Form.Control 
                name="last_name" 
                value={newUser.last_name} 
                onChange={ handleChange } 
            />

            <div className="label">
                <label>Username:</label>
            </div>
            <Form.Control 
                name="username" 
                value={newUser.username} 
                onChange={ handleChange }  
            />

            <div className="label">
                <label>Email:</label>
            </div>
            <Form.Control 
                name="email" 
                value={newUser.email} 
                onChange={ handleChange } 
            />

            <div className="label">
                <label>Password:</label>
            </div>
            <Form.Control 
                name="password" 
                type="password"
                value={newUser.password} 
                onChange={ handleChange } 
            />

            <Form.Control className="register-submit" type="Submit" value="Submit" />

        </Form>
        </>
    )
}