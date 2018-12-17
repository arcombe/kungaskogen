import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AltNavbar.css'

export default class AltNavbar extends Component {

  render() {
    return (

      <nav class="navbar navbar-default navbar-static">
          <div class="navbar-header">
      		<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
      			<span class="sr-only">Toggle navigation</span>
      			<span class="icon-bar"></span>
      			<span class="icon-bar"></span>
      			<span class="icon-bar"></span>
      		</button>

      	</div>

      	<div class="collapse navbar-collapse js-navbar-collapse">
      		<ul class="nav navbar-nav">
            <li class="dropdown dropdown-large">
      				<a href="#">Some link</a>
            </li>
      			<li class="dropdown dropdown-large">
      				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>

      				<ul class="dropdown-menu dropdown-menu-large row">
      					<li class="col-sm-6">
      						<ul>
      							<li class="dropdown-header">Sword of Truth</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
                    <li class="divider"></li>
      						</ul>
      					</li>
      					<li class="col-sm-6">
      						<ul>
      							<li class="dropdown-header">Panda</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li class="divider"></li>
      							<li class="dropdown-header">Button dropdowns</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      						</ul>
      					</li>


      				</ul>

      			</li>
            <li class="dropdown dropdown-large">
      				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>

      				<ul class="dropdown-menu dropdown-menu-large row">
      					<li class="col-sm-6">
      						<ul>
      							<li class="dropdown-header">Sword of Truths</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Theme/Character</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>

      						</ul>
      					</li>
      					<li class="col-sm-6">
      						<ul>
      							<li class="dropdown-header">by brand</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li class="divider"></li>
      						</ul>
      					</li>
      				</ul>
      			</li>
            <li class="dropdown dropdown-large">
      				<a href="#">Some link</a>
            </li>
            <li class="dropdown dropdown-large">
      				<a href="#">Some link</a>
            </li>
            <li class="dropdown dropdown-large">
      				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
      				<ul class="dropdown-menu dropdown-menu-large row">
      					<li class="col-sm-3">
      						<ul>
      							<li class="dropdown-header">Sword of Truths</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Theme/Character</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      						</ul>
      					</li>
      					<li class="col-sm-3">
      						<ul>
      							<li class="dropdown-header">by brand</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li class="divider"></li>
      						</ul>
      					</li>
      <li class="col-sm-3">
      						<ul>
      							<li class="dropdown-header">Sword of Truths</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Theme/Character</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>

      						</ul>
      					</li>
      					<li class="col-sm-3">
      						<ul>
      							<li class="dropdown-header">by brand</li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li><a href="#">Example</a></li>
      							<li class="divider"></li>
      						</ul>
      					</li>
      				</ul>
      			</li>
      		</ul>
      	</div>
      </nav>

)
  }
}
