import React, { useState, createContext } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Header"
import Register from "./Authentication/Register"
import Login from "./Authentication/Login"
import CreateRecipe from "./Authentication/CreateRecipe"
import UserRecipes from "./Components/UserRecipes/UserRecipes"
import "./App.css"

export default function App() {
  const [user, setUser] = useState([])
  const [recipes, setRecipes] = useState([])
  const [userRecipes, setUserRecipes] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <div className="App">
      <Header />
      <RecipeContext.Provider value={{
        user,
        setUser,
        recipes,
        setRecipes,
        userRecipes,
        setUserRecipes,
        loggedIn,
        setLoggedIn
      }}>
        <Switch>
          {/* <Route exact path="/" component={ Home } /> */}
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/createrecipe" component={ CreateRecipe } />
          <Route path="/recipes" component={ UserRecipes } />
        </Switch>
      </RecipeContext.Provider>
    </div>
  )
}

export const RecipeContext = createContext()