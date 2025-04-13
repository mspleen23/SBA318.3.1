const express= require("express");
const router= express.Router();

const playlists= require("../Data/playlist");

router.route('/')
.get((req, res) => {
    res.json(playlists)
})

.post((req,res) => {
    console.log(req.body);
    if (req.body.playlistTitle && req.body.genre && req.body.songId){
        if(playlists.find ((p)=>p.playlistTitle == req.body.playlistTitle)){
            return res.json({error:"Playlist Already Exist"})
        }
    
    const newPlaylist ={
     id: playlists[playlists.length - 1].id + 1,
     ...req.body
    }

    playlists.push(newPlaylist);
    // res.json(playlists[playlists.length -1]);
    res.redirect('/home');
    } else {res.json({error: "Not enough data, sorry try again"})}
});

////////new route 

router.route ('/:id')
.get((req, res) => {
    const playlist = playlists.find((playlists) => playlists.id === Number(req.params.id));
    
    if (playlist) res.json(playlist);
    else res.status(404).json({error:"Playlist Not Found"})
})

.patch ((req,res) =>{
   const playlist= playlists.find((playlist, idx) =>{
        if (playlist.id === Number(req.params.id)){
            for (const key in req.body) {
                playlists[idx][key] = req.body[key]
            }
            return true
        }
    });
    if (playlist) res.json(playlist);
    else res.status(404).json({error:"Playlist Not Found"});
})

.delete((req, res) => {
    const playlist= playlists.find((playlist, idx) => {
        if (playlist.id === Number (req.params.id)){
            playlists.splice(idx, 1);
            return true
        }   
     });
     if (playlist) res.json(playlist);
     else res.status(404).json({ error:"Playlist Not Found"});
});



module.exports= router; 