import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Youtube.css'
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://youtu.be/_nBlN9yp9R8
export default class Youtube extends Component {


  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="youtube-clip">
        <h3> Kungaskogen </h3>

        <YouTube
          videoId="aio0JuN97Ic"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}
