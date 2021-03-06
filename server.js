const express = require('express')
const app = express();
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.PORT
const ID_KEY = process.env.ID_KEY
const SECRET_KEY = process.env.SECRET_KEY

app.use(cors());

app.use('/search', (req, res) => {
  const word = req.query.query;
  axios.get('https://openapi.naver.com/v1/search/image', {
    params:{ 
      query:word, 
    }, headers: { 
          'X-Naver-Client-Id': ID_KEY,
          'X-Naver-Client-Secret': SECRET_KEY,
          'Access-Control-Allow-Origin': '*'
      } 
  }).then(function(response){
    const items = response.data.items;
     console.log(word);
    res.send(items);
  }).catch(function(error){
    res.send(error)
    console.log(error);
  });
});


app.listen(port, () => {
  console.log(`running on ${port}`)
});
