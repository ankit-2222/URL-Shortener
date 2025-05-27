const express = require('express');
const {handelGenerateShortUrl, handelGetAnalytics} = require("../controllers/url");
const { model } = require('mongoose');

const router = express.Router();

router.post("/", handelGenerateShortUrl);

router.get("/analytics/:shortId", handelGetAnalytics);

module.exports = router;