const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


const routes = require('./routes/fetchNews.js');

app.use(routes);

app.listen(5001);