import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {

  render() {
    return (
      <Grid>
          <Image src="images/kungaskogen_sid1.jpg" responsive/>
      </Grid>
    )
  }
}
