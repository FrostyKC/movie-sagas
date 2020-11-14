import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  clickBackToCollection = (event) => {
    this.props.history.push('/');
  };
  render() {
    const detailList = this.props.reduxState.movieDetails.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.title}</h1>
          <img src={item.poster} alt={item.title} />
          <p>{item.description}</p>
          <h3>Genres:</h3>
          <p>{item.genres}</p>
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.clickBackToCollection}>Back to Collection</button>
        {detailList}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(Details);
