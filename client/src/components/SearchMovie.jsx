import React from 'react';

var SearchMovie = (props) => (
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={props.searchKeyword} onChange={props.handleSearch}></input>
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={props.searchClick}>Go!</button>
    </form>

);


// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.SearchMovie = SearchMovie;

export default SearchMovie;