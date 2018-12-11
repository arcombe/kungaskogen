import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Image src="images/wwwkungaskogen_ny_snicksnack.jpg" responsive className="intro"/>
        </Row>
      </Grid>
    )
  }
}
