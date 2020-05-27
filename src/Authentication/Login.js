import React, { useState, useContext } from "react"
import { Form } from "react-bootstrap"
import { RecipeContext } from "../App"
import { userLogin } from "../Services/api-helper"
import { useMediaQuery } from "react-responsive"
import "./Login.scss"
import "../styles.css"

export default function Login(){
    const isDesktop = useMediaQuery({query: "(min-device-width: 1020px)"})
    const recipeContext = useContext(RecipeContext)
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
        <>
            {
                isDesktop ? 
                    <Form style={{margin: "17% auto"}} className="login" onSubmit={ handleSubmit }>
                    
                        <div className='label'>
                            <label>Username:</label>
                        </div>
                        <Form.Control 
                            className="username"
                            name="username"
                            value={ login.username } 
                            onChange={ handleChange } 
                        />

                        <div className='label'>
                            <label>Password:</label>
                        </div>
                        <Form.Control  
                            className="password"
                            type='password'
                            name="password" 
                            value={ login.password } 
                            onChange={ handleChange } 
                        />

                        <input className='login-submit' type="Submit" value="Login" />

                        <div style={{textAlign: "center"}}>
                            <p>Don't have an account?</p>
                            <a href="/register">Click here to make an account!</a>
                        </div>
                    </Form> :
                    
                    <Form className="login" onSubmit={ handleSubmit }>

                        <div className='label'>
                            <label>Username:</label>
                        </div>
                        <Form.Control 
                            className="username"
                            name="username"
                            value={ login.username } 
                            onChange={ handleChange } 
                        />

                        <div className='label'>
                            <label>Password:</label>
                        </div>
                        <Form.Control  
                            className="password"
                            type='password'
                            name="password" 
                            value={ login.password } 
                            onChange={ handleChange } 
                        />

                        <input className='login-submit' type="Submit" value="Login" />

                        <div style={{textAlign: "center"}}>
                            <p>Don't have an account?</p>
                            <a href="/register">Click here to make an account!</a>
                        </div>
                    </Form>
            }
        </>
    )
}