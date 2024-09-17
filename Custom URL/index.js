const express = require('express');
const app = express();
const urlRoute = require("./route/url");
const { connectToMongo } = require('./Connection');
const PORT = 8001;
const URL = require('./model/url')
app.use(express.json())
connectToMongo('mongodb://127.0.0.1:27017/short-url').then(() => console.log("connect success"));
app.use("/url", urlRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    })
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`connected successfully port ${PORT}`));

