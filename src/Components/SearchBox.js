import React, { Component } from "react";
import axios from "axios";

import "../Styles/SearchBox.css"
import "./WebTitle"
class SearchBox extends Component {

  state={
    value:'',
    data: '',
    length: ''
  }

  Search = async() => {
    const keyWord = this.state.value

    const response = await axios.get('http://localhost:3500/search'
          ,{ 
        params:{ 
        query  : keyWord,
      }, 
     });
    this.setState({length: response.data.length})
    this.setState({data: response.data})

    //for (let i = 0;  i < this.state.length; i++) {
     // console.log(this.state.link[i].link)
   // }
  }

  handleChange = (e) => {
     this.setState({value: e.target.value}); 
     console.log(e.target.value)
     this.Search();
    };

  render() {
    let{value, data, length} = this.state
    console.log(data[0])
      return (
      <div class="search">
        <input type="text" class="searchTerm" 
        placeholder="검색할 단어를 입력하세요!" onChange={this.handleChange}></input>
        <img class="first Image"></img>
     </div>
    );
  }
} 
   
export default SearchBox;