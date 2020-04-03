import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Search from "./Components/Search/Search"
import Home from "./Components/Home/Home"
import Header from "./Components/Header"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/recipe-app" component={ Home } />
        <Route path="/search" component={ Search } />
        <Redirect from="/" to="/recipe-app" />
      </Switch>
    </div>
  )
}

export default App;
