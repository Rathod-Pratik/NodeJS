const express = require('express');
const path=require('path');
const app = express();
const urlRoute = require("./route/url");
const { connectToMongo } = require('./Connection');
const URL = require('./model/url')
app.use(express.json())
connectToMongo('mongodb://127.0.0.1:27017/short-url').then(() => console.log("connect success"));
app.use("/url", urlRoute);
app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    }
                }
            },
            { new: true } 
        );

        if (!entry) {
            return res.status(404).send('URL not found');
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        res.status(500).send('Server error');
    }
});
app.set("view engine","ejs");
app.set('views',path.resolve('./View/clock'));

app.get('/test',async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render('index');
})

const PORT = 8001;
app.listen(PORT, () => console.log(`connected successfully port ${PORT}`));

