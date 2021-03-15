import React, { Component } from "react";
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import Home from "./Components/Home"
import ImageView from "./Components/ImageView"


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Search/" component={ImageView}/>
      </div>
    </Router>
  )
}

export default App;
