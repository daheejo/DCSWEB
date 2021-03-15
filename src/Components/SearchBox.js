import React, { Component } from "react";
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import "../Styles/SearchBox.css"
import "./WebTitle"

const handleChange=(e)=>{
  const keyword = e.target.value;
  const request = require('request')
  const NAVER_CLIENT_ID     = 'F6suJt1MEcLU5ORW2cpz'
  const NAVER_CLIENT_SECRET = 'kXGB0e4lVe'
  const option = {
  query  :`${keyword}`, //이미지 검색 텍스트
  start  :1, //검색 시작 위치
  display:10, //가져올 이미지 갯수
  sort   :'date', //정렬 유형 (sim:유사도)
  filter :'all' //이미지 사이즈
}

request.get({
  uri:'https://openapi.naver.com/v1/search/image', //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
  qs :option,
  headers:{
    'X-Naver-Client-Id':NAVER_CLIENT_ID,
    'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
  }
}, function(err, res, body) {
  let json = JSON.parse(body) //json으로 파싱
  console.log(json.items[0].link)
})
}

class SearchBox extends Component {
    render() {
      return (
    <div class="wrap">
      <div class="search">
        <input type="text" class="searchTerm" 
        placeholder="What are you looking for?" onChange={handleChange}></input>
        <button type="submit" class="searchButton">
          GO!
       </button>
     </div>
    </div>
    );
  }
} 
   
export default SearchBox;