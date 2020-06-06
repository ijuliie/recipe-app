import React from "react"
import { Navbar, Container, NavbarBrand } from "react-bootstrap"
import "../Components/Header.scss"
import "../styles.css"

export default function Header({handleChange, handleSubmit, foodType}){
    return (
        <>
            <Navbar fixed="top" expand="lg" variant="light" style={{height: "60px"}}>
                <Container>
                    <NavbarBrand>Recipes</NavbarBrand>
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
        </>
    )
}