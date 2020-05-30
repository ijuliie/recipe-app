import React, { useState, useContext } from "react"
import { useMediaQuery } from "react-responsive"
import { registerNewUser } from "../Services/api-helper"
import { Form } from "react-bootstrap"
import { RecipeContext } from "../App"
import "./Register.scss"

export default function Register(props){
    const isDesktop = useMediaQuery({query: "(min-device-width: 1020px)"})
    const recipeContext = useContext(RecipeContext)
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
                recipeContext.setUser(response.data)
                recipeContext.setLoggedIn(true)
                props.history.push("/")
                document.getElementById("login").innerHTML = "Successfully registered!"
            }
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewUser({...newUser, [e.target.name]: value})
     }


    return (
        <>
            {
                isDesktop ?
                    <Form style={{margin: "13% auto"}} className="register" onSubmit={ handleSubmit }>
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

                        <input className="register-submit" type="Submit" value="Submit" />

                    </Form> :

                    <Form className="register" onSubmit={ handleSubmit }>
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

                        <input className="register-submit" type="Submit" value="Submit" />

                    </Form>
            }
        </>
    )
}