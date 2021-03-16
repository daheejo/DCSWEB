import React, { Component } from "react";
import axios from "axios";

import "../Styles/SearchBox.css"
import "./WebTitle"


class SearchBox extends Component {

  state = { value: '' };

  Search = async() => {
    const keyWord = this.state.value
    const ID_KEY = 'F6suJt1MEcLU5ORW2cpz'; 
    const SECRET_KEY = 'kXGB0e4lVe';

    const response =await axios.get('/api/v1/search/image.json'
          ,{ 
        params:{ 
        query  : keyWord, 
        start  :1, 
        display:3, 
        sort   :'sim', 
        filter :'small'
      }, headers: { 
            'X-Naver-Client-Id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY,
        } 
     });
    this.setState({value: response})
    console.log(response)
  }

  handleChange = (e : any) => {
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