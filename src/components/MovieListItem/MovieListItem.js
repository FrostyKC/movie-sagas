import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieListItem extends Component {
  movieClick = (event) => {
    this.props.history.push(`/details/${this.props.movieItem.id}`);
  };

  render() {
    return (
      <div className="movieItem">
        <h1>{this.props.movieItem.title}</h1>
        <img
          onClick={this.movieClick}
          src={this.props.movieItem.poster}
          alt={this.props.movieItem.title}
        />
        <p>{this.props.movieItem.description}</p>
      </div>
    );
  }
}

export default withRouter(connect()(MovieListItem));
