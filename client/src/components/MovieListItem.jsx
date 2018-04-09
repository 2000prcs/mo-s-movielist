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
            isWatched: false,
            open: false
        };
    }
   
    render(){
        var {props: { movie: {Watched }}} = this;
        return (
            // Not using react-bootstrap?

            // <div className="card" onClick={() => this.setState({isWatched: !this.state.isWatched})}>
            //     <div className="card-header" id="headingThree">
            //         <h5 className="mb-0">
            //             <button className="btn btn-link collapsed" data-toggle="collapse" data-target={this.state.collapseId} aria-expanded="false" aria-controls="collapseThree">
            //                 {this.props.movie}
            //             </button>
            //         </h5>
            //     </div>
            //     <div id={this.state.collapseId} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            //         <div className="card-body">
            //             Movie Description
            //         </div>
            //     </div>
            // </div>
            
            // movies = object
            // this.props.movie.title
            // this.prop.movie.iswatched

            // react-bootstrap version
            
            <div>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    {this.props.movie.title}
                </Button>
                <span onClick={(e)=>this.props.handleWatch(e)}>
                    <button type="button" className={`btn btn-${Watched ? 'success' : 'warning'} btn-item`} data-toggle="button" aria-pressed="false">{Watched? 'Watched' : 'To Watch'}</button>
                    {/* : <button type="button" className="btn btn-warning btn-item" data-toggle="button" aria-pressed="false">To Watch</button>} */}
                </span>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            Released Date: {this.props.movie.release_date} <br/>
                            {/* Runtime: {this.props.movie.Runtime} <br/>                 
                            Metascore: {this.props.movie.Metascore} <br/>*/}
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