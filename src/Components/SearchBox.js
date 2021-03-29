import React, { Component } from "react";
import axios from "axios";

import "../Styles/SearchBox.css"
import "./WebTitle"
class SearchBox extends Component {

  state={
    value:'',
    data: '',
    length: '',
  }
  
  Search = async() => {
    const keyWord = this.state.value
    
    const response = await axios.get(process.env.REACT_APP_API_URL
          ,{ 
        params:{ 
        query  : keyWord,
      }, 
     });
    this.setState({length: response.data.length})
    this.setState({data: response.data})
    console.log(this.state.data[0])
  }

  handleChange = (e) => {
     this.setState({value: e.target.value}); 
     console.log(e.target.value)
     this.Search();
    };

  render() {
    let{value, data, length} = this.state
      return (
      <div class="search">
        <input type="text" class="searchTerm" 
        placeholder="검색할 단어를 입력하세요!" onChange={this.handleChange}></input>
     </div>
    );
  }
} 
   
export default SearchBox;