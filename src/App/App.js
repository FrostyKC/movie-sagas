import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import Details from '../Pages/Details/Details';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/details/:id" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
