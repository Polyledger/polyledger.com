import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Methodology from '../Methodology/Methodology';
import Team from '../Team/Team';
import Waitlist from '../Waitlist/Waitlist';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/methodology" component={Methodology} />
					<Route path="/team" component={Team} />
					<Route path="/waitlist" component={Waitlist} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
