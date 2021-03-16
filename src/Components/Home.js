import React, { Component } from "react";

import "../Styles/App.css"

import SearchBox from "./SearchBox"
import WebTitle from "./WebTitle"

class Home extends Component{
  render () {
  return ( 
    <div class="wrap">
      <div class="title">
       <WebTitle></WebTitle>
      </div>
      <div class="searchbox">
        <SearchBox></SearchBox>
      </div>
    </div>
    )
  }
}

export default Home;

