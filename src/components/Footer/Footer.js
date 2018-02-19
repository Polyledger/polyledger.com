import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="Footer block block-inverse">
				<div className="container">
					<div className="row">
						<div className="col-sm-5 mb-4">
							<ul className="list-unstyled list-spaced">
								<li className="mb-3">
									<h6 className="text-uppercase">About</h6>
								</li>
								<li className="text-muted">
									Polyledger is an organization based in Palo Alto and Berkeley,
									California. Our goal is to make digital currency investing safe,
									secure, and easy. We believe in the promise of digital currency and
									blockchains creating a more stable, efficient, and open financial
									system.
								</li>
							</ul>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-md-12">
							<h6 className="mb-4 text-uppercase">Disclaimer</h6>
							<small className="text-muted">
								<p>
									Investing in cryptocurrencies involves huge risk, including the
									possible loss of money you invest, and past performance does not
									guarantee future performance. Historical returns, expected returns, and
									probability projections are provided for informational and illustrative
									purposes, and may not reflect actual future performance.
								</p>
								<p>© Copyright 2018 Polyledger</p>
							</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
