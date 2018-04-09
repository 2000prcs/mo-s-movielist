import React from 'react';

import {ButtonToolbar, Button, Collapse, Well} from 'react-bootstrap';
import MovieList from './MovieList.jsx';

// var ButtonToolbar = ReactBootstrap.ButtonToolbar;
// var Button = ReactBootstrap.Button;
// var Collapse = ReactBootstrap.Collapse;
// var Well = ReactBootstrap.Well;

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    watchToggle(e, movie){
        e.preventDefault();
        console.log(e, movie);
        movie = this.props.movie;
        movie.Watched = !movie.Watched;
        this.setState({movie: movie});
    }

   
    render(){
        var {props: { movie: {Watched }}} = this;
        return (
            
            // movies = object
            // this.props.movie.title
            // this.prop.movie.iswatched

            // react-bootstrap version
            
            <div>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    {this.props.movie.title}
                </Button>
                <span onClick={(e)=>this.watchToggle(e, this.props.movie)}>
                {/* <span onClick={(e)=>this.props.handleWatch(e)}> */}
                    <button type="button" className={`btn btn-${this.props.movie.Watched ? 'success' : 'warning'} btn-item`} data-toggle="button" aria-pressed="false">{Watched? 'Watched' : 'To Watch'}</button>
                    {/* : <button type="button" className="btn btn-warning btn-item" data-toggle="button" aria-pressed="false">To Watch</button>} */}
                </span>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            Released Date: {this.props.movie.release_date} <br/>
                            imdbRating: {this.props.movie.vote_average} <br/>   
                            Total Votes: {this.props.movie.vote_count} <br />
                            Overview: {this.props.movie.overview}                     
                        </Well>
                    </div>
                </Collapse>
             </div>

            // Original code

            // <li className="list-group-item" onClick={() => this.setState({isWatched: !this.state.isWatched})}>
            //     {this.props.movie.title}  
            //     {this.state.isWatched ? 
            //     <button type="button" className="btn btn-warning btn-item" data-toggle="button" aria-pressed="false">To Watch</button>
            //     : <button type="button" className="btn btn-success btn-item" data-toggle="button" aria-pressed="false">Watched</button>}
            // </li>
        )
    };
}

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.MovieListItem = MovieListItem;

export default MovieListItem;