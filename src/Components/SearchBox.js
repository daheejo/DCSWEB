import React, { Component } from "react";
import axios from "axios";

import "../Styles/SearchBox.css"
import "./WebTitle"
class SearchBox extends Component {
  
  state={
    value:'',
    link: '',
    length: ''
  }

  Search = async() => {
    const keyWord = this.state.value

    const response = await axios.get('http://localhost:3001/search'
          ,{ 
        params:{ 
        query  : keyWord,
      }, 
     });
    this.setState({length: response.data.length})
    this.setState({link: response.data})

    for (let i = 0;  i < this.state.length; i++) {
      console.log(this.state.link[i].link)
    }
    console.log(this.state.length)
  }

  handleChange = (e) => {
     this.setState({value: e.target.value}); 
     console.log(e.target.value)
     this.Search();
    };


  
  render() {
      return (
      <div class="search">
        <input type="text" class="searchTerm" 
        placeholder="검색할 단어를 입력하세요!" onChange={this.handleChange}></input>
     </div>
    );
  }
} 
   
export default SearchBox;