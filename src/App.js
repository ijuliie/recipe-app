import React from "react"
import { Switch, Route } from "react-router-dom"
import Search from "./Components/Search/Search"
import Home from "./Components/Home/Home"
import Header from "./Components/Header"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/recipe-app" component={ Home } />
        <Route path="/search" component={ Search } />
      </Switch>
    </div>
  )
}
