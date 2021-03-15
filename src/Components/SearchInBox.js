import React, { Component } from "react";

import "../Styles/SearchBox.css"
import "./WebTitle"

class SearchInBox extends Component {
    render() {
      return (
    <div class="wrap">
      <div class="search">
        <input type="text" class="searchTerm" 
        placeholder="hello"></input>
        <button type="submit" class="searchButton">
          GO!
       </button>
     </div>
    </div>
    );
  }
}  
       
export default SearchInBox;