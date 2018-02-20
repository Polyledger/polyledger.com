import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from '../Landing/Landing';
import Methodology from '../Methodology/Methodology';
import Waitlist from '../Waitlist/Waitlist';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<Route path="/methodology" component={Methodology} />
					<Route path="/waitlist" component={Waitlist} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
