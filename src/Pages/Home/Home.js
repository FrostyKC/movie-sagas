import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Movie Collection!</h1>
        <MovieList />
      </div>
    );
  }
}

export default connect()(Home);
