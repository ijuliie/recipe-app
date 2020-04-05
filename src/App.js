import React from "react"
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom"
=======
import { Switch, Route, Redirect } from "react-router-dom"
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
import Search from "./Components/Search/Search"
import Home from "./Components/Home/Home"
import Header from "./Components/Header"
import "./App.css"

<<<<<<< HEAD
export default function App() {
=======
function App() {
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/recipe-app" component={ Home } />
        <Route path="/search" component={ Search } />
<<<<<<< HEAD
=======
        <Redirect from="/" to="/recipe-app" />
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
      </Switch>
    </div>
  )
}
<<<<<<< HEAD
=======

export default App;
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
