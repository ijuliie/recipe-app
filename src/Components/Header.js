import React from "react"
import { useMediaQuery } from "react-responsive"
import { Navbar, Container, NavbarBrand } from "react-bootstrap"
import "../Components/Header.scss"
import "../styles.css"

export default function Header({handleChange, handleSubmit, foodType}){
    const isTablet = useMediaQuery({query: "(min-width:768px)"})

    return (
        <>
        {
            isTablet ?
            <Navbar fixed="top" expand="lg" variant="light" style={{height: "70px"}}>
                <Container>
                    <NavbarBrand href="/">Recipeze</NavbarBrand>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                style={{width: "300px"}}
                                className="input"
                                type="text"
                                placeholder="Find a recipe"
                                value={foodType}
                                onChange={handleChange} 
                            />
                            <i onClick={handleSubmit} className="fas fa-search search"></i>
                        </form>
                    </div>
                </Container>
            </Navbar> : 
            <Navbar fixed="top" expand="lg" variant="light" style={{height: "60px"}}>
                <Container>
                    <NavbarBrand href="/">Recipeze</NavbarBrand>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="input"
                                type="text"
                                placeholder="Find a recipe"
                                value={foodType}
                                onChange={handleChange} 
                            />
                            <i onClick={handleSubmit} className="fas fa-search search"></i>
                        </form>
                    </div>
                </Container>
            </Navbar>
        }
        </>
    )
}