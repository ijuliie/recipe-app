import React, { useState, useEffect } from "react"
import Recipes from "../Recipes/Recipes"
import "./Search.css"

export default function Home() {
    const [recipes, setRecipes] = useState({})
    const [foodType, setFoodType] = useState("")
    const [search, setSearch] = useState("")
  
    useEffect(() => {
      const callApi = async () => {
        const apiKey = `4ff13b14bc14e2d5451fba71d252f5fc`
        const appId = `bd9d80c8` 
        const recipeUrl = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}`
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
              {recipes.hits ? (<Recipes recipes={recipes} />) : " " }
        </div>
    )
}
