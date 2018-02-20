import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar fixed-top">
				<nav className="container navbar navbar-padded navbar-expand-lg navbar-light">
					<NavLink to="/" className="navbar-brand">
						<img src={logo} height="50" alt="logo" />
					</NavLink>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink exact to="/" className="nav-link" activeClassName="active">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/methodology"
									className="nav-link"
									activeClassName="active"
								>
									Methodology
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
