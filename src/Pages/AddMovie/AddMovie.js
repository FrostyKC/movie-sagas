import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="title"></input>
        <input type="text" placeholder="img url"></input>
        <input type="text" placeholder="description"></input>
        <select name="Genres" placeholder="Genre">
          <option value="">Pick a Genre</option>
        </select>
      </div>
    );
  }
}

export default connect()(AddMovie);
