import React, { Component } from 'react';
import Berkeley from '../../images/berkeley.jpg';
import Matt from '../../images/matt.png';
import Farshad from '../../images/farshad.png';
import Dmitriy from '../../images/dmitriy.png';
import './Team.css';

var sectionStyle = {
	width: '100%',
	height: '250px',
	marginTop: '70px',
	backgroundImage: `url(${Berkeley})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed',
	border: '1px solid #ddd'
};

class Team extends Component {
	render() {
		return (
			<div>
				<section style={sectionStyle} />
				<div
					className="block text-center d-flex align-items-center"
					style={{ backgroundColor: '#f5f6fa' }}
				>
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<h1>Team</h1>
								<div className="row mt-5">
									<div className="col-4">
										<img
											src={Farshad}
											class="img-fluid border rounded mb-2"
											alt="Farshad Miraftab"
										/>
										<br />
										<h4>Farshad</h4>
										<h5>Data Science</h5>
									</div>
									<div className="col-4">
										<img
											src={Matt}
											class="img-fluid border rounded mb-2"
											alt="Matt Rosendin"
										/>
										<br />
										<h4>Matt</h4>
										<h5>Product &amp; Engineering</h5>
									</div>
									<div className="col-4">
										<img
											src={Dmitriy}
											class="img-fluid border rounded mb-2"
											alt="Dmitriy Berenzon"
										/>
										<br />
										<h4>Dmitriy</h4>
										<h5>Business Development</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-8 offset-2">
								<h1>Story</h1>
								<p className="text-left lead">
									Matt, Farshad, and Dmitriy have been investing in crypto-assets since 2013. As the market became more complex, they struggled to find tools that would help them manage their increasing variety of investments. The team started building Polyledger for themselves in 2017, and want to share their product with the community to enable people to make more intelligent investment decisions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Team;
