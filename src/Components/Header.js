import React, { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"
import {useMediaQuery} from "react-responsive"
import { NavLink } from "react-router-dom"
import Home from "./Home/Home"
import "../Components/Header.scss"

export default function Header(){
    const isDesktop = useMediaQuery({query: "(min-device-width: 1080px)"})
    const [recipes, setRecipes] = useState({})
    const [foodType, setFoodType] = useState("")
    const [search, setSearch] = useState("chocolate")
  
    useEffect(() => {
      const callApi = async () => {
        const apiKey = `4ff13b14bc14e2d5451fba71d252f5fc`
        const appId = `bd9d80c8` 
        const recipeUrl = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}&from=0&to=8`
        const res = await fetch(recipeUrl)
        const json = await res.json()
        setRecipes(json)
      }
      callApi()
    }, [search])
  
    const handleSearch = (e) => {
      e.preventDefault()
      setSearch(foodType)
      setFoodType("")
    }
  
    const handleChange = (e) => {
      setFoodType(e.target.value)
    }

    return (
        <>
            {
                isDesktop ? 
                    (
                        <Navbar fixed="top" expand="lg" variant="light" bg="light" style={{height: "50px"}}>
                            <Container>
                                {/* <NavLink to="/">Home</NavLink> */}

                                <div>        
                                    <form onSubmit={handleSearch}>
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

                                {/* <NavLink to="/search">Search Recipe</NavLink> */}
                                {/* <NavLink to="/register">Register</NavLink> */}
                                {/* <NavLink to="/login">Login</NavLink>
                                <NavLink to="/createrecipe">Create Recipe</NavLink>
                                <NavLink to="/recipes">Your Recipes</NavLink> */}
                            </Container>
                        </Navbar>
                    ) : 
                    (
                        <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                            <Container>
                                <div>        
                                    <form onSubmit={handleSearch}>
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
                                {/* <NavLink to="/">Home</NavLink> */}
                                {/* <NavLink to="/search">Search Recipe</NavLink> */}
                                {/* <NavLink to="/register">Register</NavLink> */}
                                {/* <NavLink to="/login">Login</NavLink>
                                <NavLink to="/createrecipe">Create Recipe</NavLink>
                                <NavLink to="/recipes">Your Recipes</NavLink> */}
                            </Container>
                        </Navbar>
                    )
            }
            <Home recipes={recipes}/>
        </>
    )
}