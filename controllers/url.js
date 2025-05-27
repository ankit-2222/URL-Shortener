const { nanoid } = require('nanoid');
const URL = require("../models/url");
const mongoose = require('mongoose');

async function handelGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body) return res.status(400).json({error: "URL is required"});
    
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    const allUrls = await URL.find({ createdBy:req.user._id }); 
    return res.render('home', {
        id: shortID,
        urls: allUrls,
    });
}

async function handelGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});

    return res.json({ TotalClicks: result.visitHistory.length, Analytics: result.visitHistory });
}

module.exports = {
    handelGenerateShortUrl,
    handelGetAnalytics,
}