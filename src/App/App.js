import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AddMovie from '../Pages/AddMovie/AddMovie';
import Details from '../Pages/Details/Details';
import Home from '../Pages/Home/Home';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/addmovie" component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
