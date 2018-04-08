import React from 'react';
import ReactDOM from 'react-dom';
// import {ButtonToolbar, Button, Collapse, Well} from 'react-bootstrap';

import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';


class App extends React.Component {
    constructor(props){
        // var movies = [
        //     {title: 'Mean Girls'},
        //     {title: 'Hackers'},
        //     {title: 'The Grey'},
        //     {title: 'Sunshine'},
        //     {title: 'Ex Machina'},
        //   ];
        var movieDataExample = [{
            title: '',
            description: '',
            Year: '',
            Runtime: '',
            Metascore: '',
            imdbRating: '',
            Watched: false
        }]
        super(props);
        this.state = {
            keyword: '',
            // pass movies as an object 
            // object.assign to make a new object not mutate
            movies: [],
            movie: {
                title: '',
                Watched: false
            },
            isWatched: false
        };
        // this binding is necessary to make 'this' work in the callback
        this.searchClick = this.searchClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.addMovieClick = this.addMovieClick.bind(this);
        this.handleWatch = this.handleWatch.bind(this);
    }
    

    handleSearch(event){
        event.preventDefault();
        this.setState({keyword: event.target.value});
    }

    searchClick(event){
        event.preventDefault();
        var filtered = this.state.movies.filter((movie)=>{
            return movie.title.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1; 
        });
        if(filtered.length > 0){
            this.setState({movies: filtered});
        } else {
            alert('No movie by that name found');
        }
    }

    handleAdd(event){
        event.preventDefault();
        this.setState({movie: {title: event.target.value, Year: 2018, Runtime: '107min', Metascore: 46, imdbRating: 6.2, Watched: this.state.movie.Watched}});
    }

    addMovieClick(event){
        // instead concat string, concat object to the movies array 
        event.preventDefault();
        // this.setState({movies: this.state.movies.concat(this.state.movie)});;
        
        // To fetch movie API data  
        this.searchMovieData({keyword: this.state.movie.title}, (data)=>{
            this.setState({movies: this.state.movies.concat(data)});
        });
    }

    handleWatch(event){
        console.log(event);
        console.log('handlewatch');
        var movie = this.state.movie;
        movie.Watched = !movie.Watched;
        this.setState({movie: movie});
        // event is now the unique movie id
        // iterate through movies array to find the movie id and toggle the watched property 
        // use setstate to trigger new rendering 
        // produce a new object rather than mutating original 
    }

    searchMovieData ({key='1d95e5c2dbf4820f2926e53a28b5bde9', keyword='Mean Girls'}, callback) {
   
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


    render() {
        // if I want to filter results with typing only, I can do the code below

        // var filteredMovies = this.props.movies.filter((movie)=>{
        //     return movie.indexOf(this.state.keyword) !== -1; 
        // });

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">MovieList</h1>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-success" data-toggle="button" aria-pressed="false" onClick={this.isWatched}>Watched</button>
                    <button type="button" className="btn btn-warning" data-toggle="button" aria-pressed="false" onClick={this.isToWatch}>To Watch</button>
                </div>
                <nav className="navbar navbar-light">
                    <div className="col-md-6 offset-md-3">
                        <div><AddMovie handleAdd={this.handleAdd} addMovieClick={this.addMovieClick}/></div>
                    </div>
                </nav>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="col-md-6 offset-md-3">
                        <div><SearchMovie searchKeyword={this.state.keyword} searchClick={this.searchClick} handleSearch={this.handleSearch}/></div>
                    </div>
                </nav>
                <div className="movie-title"> 
                    <MovieList searchKeyword={this.state.keyword} movies={this.state.movies} handleWatch={this.handleWatch}/>
                </div>
            </div>
        );
    }
}

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;


export default App;





