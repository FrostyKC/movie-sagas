import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import './MovieListItem.css';
import { CardActionArea } from '@material-ui/core';

class MovieListItem extends Component {
  // takes user to details page of a movie based on id
  movieClick = (event) => {
    this.props.history.push(`/details/${this.props.movieItem.id}`);
  };

  render() {
    return (
      // rendering movie to dom
      <div className="movieItem">
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              onClick={this.movieClick}
              image={this.props.movieItem.poster}
              title={this.props.movieItem.title}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.movieItem.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.movieItem.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(connect()(MovieListItem));
