const express = require('express');
const router = express.Router();
const axios = require('axios');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



require('dotenv').config();

const apiKey = process.env.apiKey;
const appSecret = process.env.appSecret;

router.post('/getnews', jsonParser, async (req, res, next) => {
    try {
        const { category, token } = req.body;

        if (token !== appSecret) {
            return res.json('unauthorized');
        }
        let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=1&pageSize=100`;

        const { data } = await axios.get(URL);
        if (!data) {
            return res.json({ staus: false });
        } else {
            return res.json({ status: true, data });
        }
    }
    catch (err) {
        next(err);
    }
});

router.get('/', (req, res, next) => {
    res.json({ status: "working" });
})

module.exports = router;