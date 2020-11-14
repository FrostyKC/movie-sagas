import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListItem extends Component {
  render() {
    return (
      <div className="movieItem">
        <h1>{this.props.movieItem.title}</h1>
        <img
          src={this.props.movieItem.poster}
          alt={this.props.movieItem.title}
        />
        <p>{this.props.movieItem.description}</p>
      </div>
    );
  }
}

export default connect()(MovieListItem);
