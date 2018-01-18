// apiKey = 4b625c1a78f6443d95b9ec1947f3ff62

'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const conString = 'postgress://localhost:5432';
// const conString = 'postgres://postgres:postgres@localhost:5432/booklist';
const client = new pg.Client(conString);

client.connect();

app.use(express.static('./public'));
app.listen(PORT, () => {
    console.log(`listening on PORT:  ${PORT}`);
})
