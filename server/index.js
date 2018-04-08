const express = require('express');
const app = express();

const path = require('path');

// import DB
const db = require('../db');

// set PORT 
const port = 7777;

// get body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// serve client static files 
app.use(express.static(path.join(__dirname, '../client')));

// handle POST request
app.post('/movies', (req, res)=> {
    res.send('Respond for POST request');
});

// handle GET request 
app.get('/movies', (req, res)=>{
    res.send('Respond for GET request');
});


// listen to the port 
app.listen(port, console.log(`Listening to the port ${port}....`));

module.exports.app = app;