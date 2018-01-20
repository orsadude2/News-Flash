// apiKey = 4b625c1a78f6443d95b9ec1947f3ff62

'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const superagent = require('superagent');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
// const conString = 'postgres://postgres:postgres@localhost:5432/booklist';
// const conString = 'postgress://localhost:5432';
// const conString = 'postgres://postgres:postgres@localhost:5432/booklist';
// const client = new pg.Client(conString);

// client.connect();
app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/*', cors(),(request, response) => {
//   response.sendFile('index.html', { root: './public' });
// })https://newsapi.org/v2/sources?
//https://newsapi.org/v2/top-headlines?sources=cnn,abc-news,fox-news&apiKey=4b625c1a78f6443d95b9ec1947f3ff62
app.get('/sources', (request, result) => {//http://newsapi.org/v2/top-headlines?
  // let url = 'https://newsapi.org/v2/sources?' +
  //   'country=us&' +
  //   // 'top-headlines?sources=cnn,abc-news,fox-news&' +
  //   // 'apiKey=4b625c1a78f6443d95b9ec1947f3ff62';
  //   'apiKey=181f3d6ba91f430b93b559021ceb725b';
  // // console.log(url);
  let url = ('https://newsapi.org/v2/top-headlines?sources=cnn,abc-news,fox-news&apiKey=181f3d6ba91f430b93b559021ceb725b');
  superagent.get(url)
    .then(
      // repos => result.send(JSON.parse(repos.text).sources),
      repos => {
        let data = JSON.parse(repos.text).articles;
        // console.log('data', data[0]);
        result.send(data);
      },
      err => result.send(err)
    ).catch(error => console.error(error));
})

app.listen(PORT, () => {
  console.log(`listening on PORT:  ${PORT}`);
})
