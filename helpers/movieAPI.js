const $ = require('jquery');

const searchMovieData = ({key='1d95e5c2dbf4820f2926e53a28b5bde9', keyword=''}, callback) => {
   
    let movieData = {
        api_key: key,
        query: keyword
    };

    // I need a request module for node js...

    // $.ajax({
    //     url: 'https://api.themoviedb.org/3/search/movie?api_key=',
    //     type: 'GET',
    //     contentType: 'application/json',
    //     data: movieData,
    //     success: data => {
    //         callback(data.results);
    //         console.log('GET request success! Data from API: ', data);
    //     },
    //     error: error => {
    //         console.log('Errrrrrrrrrr', error);
    //     }
    // });

}

module.exports.searchMovieData = searchMovieData;