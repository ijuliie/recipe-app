import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import Recipes from "../Recipes/Recipes"
import Images from "../Images/Images"
import Header from "../Header"
import "../../styles.css"
import "./Home.css"

export default function Home(){
    const isMobile = useMediaQuery({query: "(min-device-width: 500px)"})
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
            <Header recipes={recipes} foodType={foodType} handleSubmit={handleSearch} handleChange={handleChange} />
            {!isMobile ? " " : <Images />}
            <h1 className="hungry-title">Hungry?</h1>
            <hr />
            {recipes.hits ? (<Recipes recipes={recipes} />) : " " }
        </>
    )
}