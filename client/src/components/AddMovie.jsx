import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';


var AddMovie = (props) => (
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="" placeholder="Add a movie title here" aria-label="Search" onChange={props.handleAdd}></input>
        <button className="btn btn-success my-2 my-sm-0" type="submit" onClick={props.addMovieClick}>Add</button>
    </form>
);


// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.AddMovie = AddMovie;

export default AddMovie;