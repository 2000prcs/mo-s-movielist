import React from 'react';
import ReactDOM from 'react-dom';


var searchMovieData = ({key='1d95e5c2dbf4820f2926e53a28b5bde9', keyword='Mean Girls'}, callback) => {
   
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
            console.log(data);
            callback(data.results);
            console.log('Data sent!');
        },
        error: data => {
            console.log('Errrrrrrrrrr');
        }
    });

}

// window.searchMovieData = searchMovieData;

//export default searchMovieData;