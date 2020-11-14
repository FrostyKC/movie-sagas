import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreListItem extends Component {
  render() {
    return (
      <option value={this.props.genreItem.id}>
        {this.props.genreItem.name}
      </option>
    );
  }
}

export default connect()(GenreListItem);
