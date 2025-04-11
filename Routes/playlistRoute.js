const express= require("express");
const router= express.Router();

const playlist= require("../Data/playlist");

router.get("/", (req, res)=>{
    res.json(playlist)
})


module.exports= router; 