import React from "react"
import { Navbar, Container } from "react-bootstrap"
import {useMediaQuery} from "react-responsive"
import { NavLink } from "react-router-dom"

export default function Header(){
    const isDesktop = useMediaQuery({query: "(min-device-width: 1080px)"})
    return (
        <>
            {
                isDesktop ? 
                    (
                        <Navbar fixed="top" expand="lg" variant="light" bg="light" style={{height: "50px"}}>
                            <Container>
                                <NavLink to="/recipe-app">Home</NavLink>
                                <NavLink to="/search">Search Recipe</NavLink>
                            </Container>
                        </Navbar>
                    ) : 
                    (
                        <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                            <Container>
                                <NavLink to="/recipe-app">Home</NavLink>
                                <NavLink to="/search">Search Recipe</NavLink>
                            </Container>
                        </Navbar>
                    )
            }
        </>
    )
}