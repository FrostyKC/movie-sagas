import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailListItem extends Component {
  render() {
    // rendering the movie details of each item.
    return (
      <div key={this.props.index}>
        <h1>{this.props.item.title}</h1>
        <img src={this.props.item.poster} alt={this.props.item.title} />
        <p>{this.props.item.description}</p>
        <h3>Genres:</h3>
        <p>{this.props.item.genres}</p>
      </div>
    );
  }
}

export default connect()(DetailListItem);
