import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import AddMovie from '../Pages/AddMovie/AddMovie';
import Details from '../Pages/Details/Details';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Collection!</h1>
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/addmovie" component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
