const URL = require("../model/url");
const ShortUniqueId = require('short-unique-id');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'please enter valid url' });

    const uid = new ShortUniqueId();

    const ShortID = uid.randomUUID(8);

    await URL.create({
        shortId: ShortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: ShortID });
}
async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});

    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
    })
}
module.exports = { handleGenerateNewShortURL,handleGetAnalytics };
