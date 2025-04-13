const express = require('express'); 
const app= express ();
const PORT =3000; 

const bodyParser = require("body-parser");

const playlist= require("./Routes/playlistRoute"); 
const playlists = require("./Data/playlist");
const songs= require("./Routes/songsRoute");
const ratings= require("./Routes/ratingsRoute");

const error = require("./utilities/error");

///////Parsing Middleware//////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

/////// EJS Setup ///////////
app.set("view engine", "ejs");
app.set("views", "./views");


//Logging Middlewaare
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});


////Here are the Routes/////
app.use("/api/playlist", playlist);
app.use("/api/songs", songs);
app.use("/api/ratings", ratings);


////////////Created Routes /////////////
// app.get('/', (req, res) =>{
//     res.send('Welcome to the Music Room')
// })
 
app.get('/home', (req, res) => {
  res.render("home", { playlists });
});






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