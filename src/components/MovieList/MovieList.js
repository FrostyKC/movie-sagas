import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the movieList from the API
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  clickAddMovie = (event) => {
    this.props.history.push('/addmovie');
  };

  render() {
    console.log(this.props.reduxState.movies);
    return (
      <div>
        <div>
          <Button variant="contained" onClick={this.clickAddMovie}>
            Add a Movie
          </Button>
        </div>
        {this.props.reduxState.movies.map((movieItem, index) => {
          return <MovieListItem key={index} movieItem={movieItem} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(MovieList);
