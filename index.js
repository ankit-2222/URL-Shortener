const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectToMongoDb } = require('./connect');
const URL = require("./models/url");
const { restrictToUserLoggedinOnly, checkAuth } = require('./middlewares/auth');

const urlRoute = require('./routes/url');
const userRoute = require('./routes/user');
const staticRoute = require('./routes/staticRoutes');

const app = express();
const PORT = 8001;

//connection
connectToMongoDb("mongodb://localhost:27017/URL-Shortner").then(() => console.log("MongoDB Connected"));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Router
app.use("/url", restrictToUserLoggedinOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectUrl);
});



app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
