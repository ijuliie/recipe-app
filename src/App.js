import React, { useState, createContext } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Favorites from "./Components/Favorites/Favorites"
import Footer from "./Components/Footer/Footer"
import "./App.css"

export default function App() {

  const [favorites, setFavorites] = useState([])

  return (
    <div className="App">
      <RecipeContext.Provider value={{
        favorites,
        setFavorites
      }}>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/favorites" component={ Favorites } />
        </Switch>
      </RecipeContext.Provider>
      <Footer />
    </div>
  )
}

export const RecipeContext = createContext()