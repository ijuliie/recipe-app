import React, { useState, createContext } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Register from "./Authentication/Register"
import Login from "./Authentication/Login"
import CreateRecipe from "./Authentication/CreateRecipe"
import UserRecipes from "./Components/UserRecipes/UserRecipes"
import Favorites from "./Components/Favorites/Favorites"
import Footer from "./Components/Footer/Footer"
import "./App.css"

export default function App() {
  const [user, setUser] = useState([])
  const [newRecipes, setNewRecipes] = useState([])
  const [userRecipes, setUserRecipes] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [favorites, setFavorites] = useState([])

  return (
    <div className="App">
      <RecipeContext.Provider value={{
        user,
        setUser,
        newRecipes,
        setNewRecipes,
        userRecipes,
        setUserRecipes,
        loggedIn,
        setLoggedIn,
        favorites,
        setFavorites
      }}>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/createrecipe" component={ CreateRecipe } />
          <Route path="/favorites" component={ Favorites } />
        </Switch>
      </RecipeContext.Provider>
      <Footer />
    </div>
  )
}

export const RecipeContext = createContext()