import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Image src="images/wwwkungaskogen_ny_snicksnack_emblem_2.jpg" responsive className="intro"/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
