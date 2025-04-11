const express= require("express");
const router= express.Router();

const songs= require("../Data/ratings");
const playlistRatings = require("../Data/ratings");

router.get("/", (req, res)=>{
    res.json(playlistRatings)
})


module.exports= router; 