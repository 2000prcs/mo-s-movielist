import React from 'react';
import ReactDOM from 'react-dom';

var _ = require('underscore');

import App from './App.jsx';
import MovieListItem from './MovieListItem.jsx';

var MovieList = (props) => ( 

    // <div id="accordion">
    //     {props.movies.map((movie) => <MovieListItem movie={movie} isWatched={props.isWatched} watchClick={props.watchClick}/>)}
    // </div>

    <ul className="list-group">
        {_.map(props.movies, (movie) => <MovieListItem movie={movie} key={movie.id} handleWatch={()=>props.handleWatch(movie.id)}/>)}

    </ul>
);

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.MovieList = MovieList;


export default MovieList;