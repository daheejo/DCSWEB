import React, { Component } from "react";
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import SearchBox from "./SearchBox"
import WebTitle from "./WebTitle"

class Home extends Component{
  render () {
  return ( 
    <div>
        <SearchBox></SearchBox>
        <WebTitle></WebTitle>
    </div>
    )
  }
}

export default Home;

