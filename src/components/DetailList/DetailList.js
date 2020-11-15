import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailListItem from '../DetailListItem/DetailListItem';

class DetailList extends Component {
  render() {
    return (
      // mapping through the movieDetails reducer to sort details for each movie
      <div>
        {this.props.reduxState.movieDetails.map((item, index) => {
          return <DetailListItem key={index} item={item} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(DetailList);
