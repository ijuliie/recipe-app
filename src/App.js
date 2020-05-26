import React, { useState, createContext } from "react"
import { Switch, Route } from "react-router-dom"
import Search from "./Components/Search/Search"
import Home from "./Components/Home/Home"
import Header from "./Components/Header"
import Register from "./Authentication/Register"
import Login from "./Authentication/Login"
import "./App.css"

export default function App() {
  const [user, setUser] = useState([])
  const [newRecipe, setNewRecipe] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <div className="App">
      <Header />
      <RecipeContext.Provider value={{
        user,
        setUser,
        newRecipe,
        setNewRecipe,
        loggedIn,
        setLoggedIn
      }}>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/search" component={ Search } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
        </Switch>
      </RecipeContext.Provider>
    </div>
  )
}

export const RecipeContext = createContext()