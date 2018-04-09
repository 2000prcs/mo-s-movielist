import React from 'react';

const database = require('../../../db/index.js');


// API handler from the movie DB

var searchMovieData = ({key='1d95e5c2dbf4820f2926e53a28b5bde9', keyword=''}, callback) => {
   
    var movieData = {
        api_key: key,
        query: keyword
    };

    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=',
        type: 'GET',
        contentType: 'application/json',
        data: movieData,
        success: data => {
            callback(data.results);

            // Add movie data to DB 
            database.addNewMovie(data.results);
            console.log('GET request success! Data from API: ', data);
        },
        error: error => {
            console.log('Errrrrrrrrrr', error);
        }
    });

}

// window.searchMovieData = searchMovieData;

export default searchMovieData;