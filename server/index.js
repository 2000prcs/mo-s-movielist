const express = require('express');
const app = express();

const path = require('path');

// import DB
const db = require('../db');

// // import API
// const api = require('../helpers/movieAPI.js');

// set PORT 
const port = 7777;

// get body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// serve client static files 
app.use(express.static(path.join(__dirname, '../client')));

// handle POST request
app.post('/api/movies', (req, res)=> {
    console.log('Respond for POST request: ', req.body);
    // In order to request info to API, need a request module

    // api.searchMovieData({keyword: req.body}, (data)=>{
    //     console.log('Data from API: ', data);
    // });

    res.send(req.body);
});

// handle GET request 
app.get('/api/movies', (req, res)=>{
    let testData = [{title: "Mean Girls"}];
    console.log('Respond for GET request: ', req.body);
    res.send(testData);
});


// listen to the port 
app.listen(port, console.log(`Listening to the port ${port}....`));

module.exports.app = app;