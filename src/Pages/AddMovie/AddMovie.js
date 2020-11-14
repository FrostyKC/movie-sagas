import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreListItem from '../../components/GenreListItem/GenreListItem';

class AddMovie extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the genreList from the API
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

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
          <select
            name="Genres"
            placeholder="Genre"
            onChange={this.handleInputChange('genre_id')}
          >
            {this.props.reduxState.genres.map((genreItem, index) => {
              return <GenreListItem key={index} genreItem={genreItem} />;
            })}
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
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(AddMovie);
