import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import Recipes from "./Components/Recipes/Recipes"
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails"
import Footer from "./Components/Footer/Footer"
import { Spinner } from "react-bootstrap"
import "./App.css"

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [foodType, setFoodType] = useState("")
  const [search, setSearch] = useState("dessert")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const callApi = async () => {
      setLoading(true)
      const apiKey = `1165067289152cf22ecf26a6bb0bcd41`
      const appId = `6227bd9a`
      const recipeUrl = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}&from=0&to=8`
      const res = await fetch(recipeUrl)
      const json = await res.json()
      setRecipes(json.hits)
      setLoading(false)
    }
    callApi()
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(foodType)
    setFoodType("")
  }

  const handleChange = (e) => {
    setFoodType(e.target.value)
  }

  return (
    <div className="App">
      <Header recipes={recipes} foodType={foodType} loading={loading} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Switch>
        <Route exact path="/" component={() => recipes.length ? (<Recipes recipes={recipes} />) : loading && <div style={{ marginTop: '200px', textAlign: 'center' }}><Spinner animation='border' /></div>} />
        <Route path="/:ingredients" component={RecipeDetails} />
      </Switch>
      <Footer />
    </div>
  )
}