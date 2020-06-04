import React from "react"
import { Navbar, Container } from "react-bootstrap"
import {useMediaQuery} from "react-responsive"
import { NavLink } from "react-router-dom"
import "../Components/Header.scss"

export default function Header({handleChange, handleSubmit, foodType}){
    const isDesktop = useMediaQuery({query: "(min-device-width: 1080px)"})
    
    return (
        <>
            {
                isDesktop ? 
                    (
                        <Navbar fixed="top" expand="lg" variant="light" bg="light" style={{height: "50px"}}>
                            <Container>

                                <div>        
                                    <form onSubmit={handleSubmit}>
                                    <label className="label">Find a recipe:</label> 
                                        <input
                                        className="input"
                                        type="text"
                                        value={foodType}
                                        onChange={handleChange} 
                                        />
                                        <input
                                        className="search"
                                        type='submit'
                                        value='Search' 
                                        />
                                    </form>
                                </div>
                            </Container>
                        </Navbar>
                    ) : 
                    (
                        <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                            <Container>
                                <div>        
                                    <form onSubmit={handleSubmit}>
                                    <label className="label" htmlFor="Enter Recipe">Enter Recipe:</label>
                                        <input
                                        className="input"
                                        type="text"
                                        value={foodType}
                                        onChange={handleChange} 
                                        />
                                        <input
                                        className="search"
                                        type='submit'
                                        value='Search' 
                                        />
                                    </form>
                                </div>
                            </Container>
                        </Navbar>
                    )
            }
        </>
    )
}