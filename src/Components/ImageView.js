import React, { Component } from "react";
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import WebTitle from "./WebTitle"
import "../Styles/ImageView.css"
import SearchInBox from "./SearchInBox";

class ImageView extends Component{
    render () {
    return ( 
      <div>
        <WebTitle></WebTitle>
        <SearchInBox></SearchInBox>
      </div>
    )
  }
}

export default ImageView

