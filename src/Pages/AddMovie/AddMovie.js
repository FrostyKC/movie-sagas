import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre_id: '',
    },
  };

  handleInputChange = (input) => (event) => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [input]: event.target.value,
      },
    });
  };

  clickSaveMovie = (event) => {
    this.props.dispatch({ type: 'POST_MOVIE', payload: this.state.newMovie });
    this.setState({
      newMovie: {
        title: '',
        poster: '',
        description: '',
        genre_id: '',
      },
    });
    this.props.history.push('/');
  };

  clickCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>
          <pre>{JSON.stringify(this.state)}</pre>
          <input
            type="text"
            placeholder="title"
            onChange={this.handleInputChange('title')}
          ></input>
          <input
            type="text"
            placeholder="img url"
            onChange={this.handleInputChange('poster')}
          ></input>
          <input
            type="text"
            placeholder="description"
            onChange={this.handleInputChange('description')}
          ></input>
          <select name="Genres" placeholder="Genre">
            <option value="">Pick a Genre</option>
          </select>
        </div>
        <div>
          <button onClick={this.clickCancel}>Cancel</button>
          <button onClick={this.clickSaveMovie}>Save</button>
        </div>
      </div>
    );
  }
}

export default connect()(AddMovie);
