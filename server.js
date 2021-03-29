const express = require('express')
const app = express();
const cors = require('cors');
const axios = require('axios');

import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT
const ID_KEY = process.env.ID_KEY
const SECRET_KEY = process.env.SECRET_KEY

app.use(cors());

app.use('/search', (req, res) => {
  const word = req.query.query;
  axios.get('https://openapi.naver.com/v1/search/image', {
    params:{ 
      query  :word, 
      start  :1, 
      display:3, 
      sort   :'sim', 
      filter :'small'
    }, headers: { 
          'X-Naver-Client-Id': ID_KEY,
          'X-Naver-Client-Secret': SECRET_KEY,
          'Access-Control-Allow-Origin': '*'
      } 
  }).then(function(response){
    const items = response.data.items;
     console.log(word);
    res.send(items);
  }).catch(function(error) {
    console.log(error);
  });
});


app.listen(port, () => {
  console.log(`running on ${port}`)
});
