const express= require("express");
const router= express.Router();

const playlistRatings = require("../Data/ratings");

// router.get("/", (req, res)=>{
//     res.json(playlistRatings)
// });

router.get("/", (req, res) => {
    const { rating } = req.query;
    let filteredRatings = playlistRatings;

    if (rating) {
        filteredRatings = filteredRatings.filter(r => r.rating === Number(rating));
    }
    if (filteredRatings.length > 0) {
        res.json(filteredRatings);
    } else {
        res.status(404).json({ error: "No ratings found matching query parameters." });
    }
});

module.exports= router; 