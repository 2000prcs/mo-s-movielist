import React from 'react';

import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';


class App extends React.Component {
    constructor(props){
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
            watchMovies: [],
            movie: {
                title: ''
            }
        };
        // this binding is necessary to make 'this' work in the callback
        this.searchClick = this.searchClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.addMovieClick = this.addMovieClick.bind(this);
        this.isWatched = this.isWatched.bind(this);
    }
    

    // Handling search movies on the list
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

    // Handling Adding new movie to the list
    // TO DO : if it's a same movie title, don't search it and alert user
    handleAdd(event){
        event.preventDefault();
        // set a fake movie data as default
        this.setState({movie: {title: event.target.value}});
    }

    addMovieClick(event){
        // instead concat string, concat object to the movies array 
        event.preventDefault();
        // this.setState({movies: this.state.movies.concat(this.state.movie)});;
        
        // To fetch movie API data  
        this.props.searchAPI({keyword: this.state.movie.title}, (data)=>{
            this.setState({movies: this.state.movies.concat(data)});
            // make a copy of original movies array for watch toggle... (better way?)
            this.setState({watchMovies: this.state.movies});
        });

        this.fetchData(this.state.movie.title);
    }


    // Sort by Watched / To Watch 
    isWatched(bool){
        // event is now the unique movie id
        // iterate through movies array to find the movie id and toggle the watched property 
        // use setstate to trigger new rendering 
        // produce a new object rather than mutating original 

        // iterating through 'copy' array to check each movie's 'Watched' property
        let watchedMovies = [];
        let toWatchMovies = [];
        this.state.watchMovies.forEach((movie)=>{
                console.log(movie);
                if(movie.Watched === true){
                    watchedMovies.push(movie);
                } else if (movie.Watched === false) {
                    toWatchMovies.push(movie);
                }
        }); 

        if (bool === true){
            this.setState({movies: watchedMovies});
        } else if (bool === false) {
            this.setState({movies: toWatchMovies});
        }
    }

    
    // fetch moviedata from server -> server gets info from API 
    fetchData(keyword){

        // Test data for DB query
        let defaultData = {
            title: keyword,
            release_date: '',
            poster_path: '',
            vote_average: 7,
            vote_count: 777,
            overview: 'Testing'
        }

        fetch('/api/movies', {
            body: JSON.stringify(defaultData),
            headers: {'Content-Type': 'application/json'}, // must match with 'content-type' header
            method: 'POST'
            })
            .then(res => res.json()) // parse responses to JSON
            .then(result => {
                console.log('GET request to the server success! Data: ', result);
            },
            (error) => {
                console.log('GET request failed. Error: ', error);
            })
    }


    render() {
        // if I want to filter results with typing only, I can do the code below

        // var filteredMovies = this.props.movies.filter((movie)=>{
        //     return movie.indexOf(this.state.keyword) !== -1; 
        // });


        // TO DO : make a button 'show all' to show all movie titles entered
        
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">MovieList</h1>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-success" data-toggle="button" aria-pressed="false" onClick={()=>this.isWatched(true)}>Watched</button>
                    <button type="button" className="btn btn-warning" data-toggle="button" aria-pressed="false" onClick={()=>this.isWatched(false)}>To Watch</button>
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





