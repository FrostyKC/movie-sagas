import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailList from '../../components/DetailList/DetailList';

class Details extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the movie details from the API
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
  }
  // redirects user to homepage
  clickBackToCollection = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      // rending the movie details
      <div>
        <h1>Movie Details!</h1>
        <Button variant="contained" onClick={this.clickBackToCollection}>
          Back to Collection
        </Button>
        {/* <button onClick={this.clickBackToCollection}>Back to Collection</button> */}
        <DetailList />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(Details);
