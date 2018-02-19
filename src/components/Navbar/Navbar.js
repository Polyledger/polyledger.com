import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar fixed-top">
				<nav className="container navbar navbar-padded navbar-toggleable-sm">
					<Link to="/" className="navbar-brand mr-auto">
						<img src={logo} className="Navbar-logo" height="50" alt="logo" />
					</Link>
				</nav>
			</div>
		);
	}
}

export default Navbar;
