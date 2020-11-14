import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  render() {
    console.log(this.props.reduxState.movies);
    return (
      <div>
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