const express= require("express");
const router= express.Router();

const playlist= require("../Data/playlist");

router.route('/')
.get((req, res)=>{
    res.json(playlist)
})

.post((req,res)=>{
    if (req.body.playlistTitle && req.body.genre && req.body.songId){
        if(playlist.find ((p)=>p.playlistTitle == req.body.playlistTitle)){
            return res.json({error:"Playlist Already Exist"})
        }
    
    const playlist ={
     id: playlist[playlist.length - 1].id + 1,
     ...req.body
    }

    playlist.push(playlist);
    res.join(playlist);
    } else res.json({error: "Not enough data, sorry try again"})
});



module.exports= router; 