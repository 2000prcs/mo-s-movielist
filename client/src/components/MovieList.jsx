import React from 'react';
var _ = require('underscore');

import MovieListItem from './MovieListItem.jsx';

var MovieList = (props) => ( 

    <ul className="list-group">
        {_.map(props.movies, (movie) => {
        // give each movie a property of 'watched'
        if(!movie.Watched){
            let newMovie = movie;
            newMovie.Watched = false;
        }
        return <MovieListItem movie={movie} key={movie.id} handleWatch={()=>props.handleWatch(movie.id)}/>
        })}

    </ul>
);

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.MovieList = MovieList;


export default MovieList;