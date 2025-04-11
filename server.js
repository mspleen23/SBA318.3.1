const express = require('express'); 
const app= express ();
const PORT =3000; 

const bodyParser = require("body-parser");
const playlist= require("./routes/playlist"); 

const error = require("./utilities/error");

///////Parsing Middleware//////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


////Here are the Routes/////
app.use("/api/playlist", playlist);



//////Home Routes////
app.get('/', (req, res) => {
    res.send('This is the home of my express server')
})

app.get('/home', (req, res) =>{
    res.send('Welcome to the Music Room')
})









app.listen(PORT, ()=> {
console.log(`Server is listening on PORT:${PORT}`)
})