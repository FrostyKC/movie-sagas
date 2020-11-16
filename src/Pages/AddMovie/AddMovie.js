import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreListItem from '../../components/GenreListItem/GenreListItem';
import Box from '@material-ui/core/Box';
import './AddMovie.css';

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

  // tracking change in the input fields
  handleInputChange = (input) => (event) => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [input]: event.target.value,
      },
    });
  };

  // dispatches a post carrying newMovie data, redirects user to home page.
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

  // redirects user to homepage
  clickCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    //rendering input fields to dom for title img url description and a dropdown for genres, tracks change, and 2 buttons, cancel and save.
    return (
      <div>
        <div>
          <h1>Add a movie to the Collection</h1>
          {/* <pre>{JSON.stringify(this.state)}</pre> */}
          <Box m={1} display="inline">
            <TextField
              id="outlined-basic"
              label="Title"
              multiline
              rows={2}
              variant="outlined"
              onChange={this.handleInputChange('title')}
            />
          </Box>
          <Box m={1} display="inline">
            <TextField
              id="outlined-basic"
              label="Img URL"
              multiline
              rows={2}
              variant="outlined"
              onChange={this.handleInputChange('poster')}
            />
          </Box>
          <Box m={1} display="inline">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={2}
              variant="outlined"
              onChange={this.handleInputChange('description')}
            />
          </Box>
          <Box m={1} display="inline">
            <FormControl variant="filled">
              <InputLabel htmlFor="filled-age-native-simple">Genre</InputLabel>
              <Select
                native
                multiline
                rows={2}
                onChange={this.handleInputChange('genre_id')}
                label="Genre"
              >
                <option aria-label="None" value="" />
                {this.props.reduxState.genres.map((genreItem, index) => {
                  return <GenreListItem key={index} genreItem={genreItem} />;
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="addMovieBtn">
          <Box m={1} display="inline">
            <Button variant="contained" onClick={this.clickCancel}>
              Cancel
            </Button>
          </Box>
          <Box m={1} display="inline">
            <Button variant="contained" onClick={this.clickSaveMovie}>
              Save
            </Button>
          </Box>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(AddMovie);
