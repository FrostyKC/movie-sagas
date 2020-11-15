import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

class Home extends Component {
  clickAddMovie = (event) => {
    this.props.history.push('/addmovie');
  };

  render() {
    return (
      <div>
        <h1>Movie Collection!</h1>
        <Button variant="contained" onClick={this.clickAddMovie}>
          Add a Movie
        </Button>
        <MovieList />
      </div>
    );
  }
}

export default connect()(Home);
