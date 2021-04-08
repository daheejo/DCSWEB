import React, { Component } from "react";
import axios from "axios";

import "../Styles/SearchBox.css"
import "./WebTitle"
class SearchBox extends Component {

  state={
    value:'',
    searchWord:'',
    length: '',
    data: '',
    error: ''
  }
  
  Search = async() => {
    const keyWord = this.state.searchWord
    
    const response = await axios.get(process.env.REACT_APP_API_URL
          ,{ 
        params:{ 
        query:keyWord,
      }, 
     });
    this.setState({length: response.data.length})

    if(this.state.length == 10)
    {
      this.setState({data: response.data[0].link})
    } else {
      this.setState({data:'https://blog.kakaocdn.net/dn/b1LbER/btqEbP8vrCN/JX24e3Zj2Q2BfYKJo9GLdK/img.jpg'})
      console.log(response)
    }
    console.log(this.state.data)
  }

  handleChange = (e) => {
     this.setState({value: e.target.value}); 
    };

  handleSubmit = (e) => {
    if(e){
      this.setState({searchWord: this.state.value})
      console.log(this.state.searchWord)
      this.Search();
    }
  }
  
  render() {
      return (
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" 
        placeholder="검색할 단어를 입력하세요!" value={this.state.value} onChange={this.handleChange}></input>
          <div class='image-display' style="overflow: hidden">
            <div class="container">
              <div class="inner">
              <img src={this.state.data}></img>
              </div>
            </div>
            <div class="container">
              <div class="inner">
              <img src={this.state.data}></img>
              </div>
            </div>
        </div>
        </div>
        <div class="button" onClick={this.handleSubmit}>Find</div>
     </div>
    );
  }
} 
   
export default SearchBox;