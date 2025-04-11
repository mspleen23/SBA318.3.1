const express = require('express'); 
const app= express ();
const PORT =3000; 

const bodyParser = require("body-parser");

const playlist= require("./Routes/playlistRoute"); 
const songs= require("./Routes/songsRoute");
const ratings= require("./Routes/ratingsRoute");

const error = require("./utilities/error");

///////Parsing Middleware//////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


////Here are the Routes/////
app.use("/api/playlist", playlist);
app.use("/api/songs", songs);
app.use("/api/ratings", ratings);


//////Home Routes////
app.get('/', (req, res) => {
    res.send('This is the home of my express server')
})

app.get('/home', (req, res) =>{
    res.send('Welcome to the Music Room')
})

/////404 Middleware////
app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
  });

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });







app.listen(PORT, ()=> {
console.log(`Server is listening on PORT:${PORT}`)
})