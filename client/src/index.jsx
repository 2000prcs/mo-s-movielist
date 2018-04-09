import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import SearchMovieData from './components/SearchMovieData.jsx';

ReactDOM.render(<App searchAPI={SearchMovieData} />, document.getElementById('app'));

