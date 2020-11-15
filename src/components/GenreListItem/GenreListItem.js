import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreListItem extends Component {
  render() {
    return (
      // shows the genres as options in the dropdown, with their value being their id
      <option value={this.props.genreItem.id}>
        {this.props.genreItem.name}
      </option>
    );
  }
}

export default connect()(GenreListItem);
