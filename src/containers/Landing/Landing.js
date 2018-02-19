import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="block block-fill-height text-center d-flex align-items-center">
					<div className="container-fluid">
						<div className="block-foreground">
							<h1>Digital currency portfolios made simple</h1>
							<h4 className="mb-4">Stop manually tracking your crypto portfolio</h4>
							<form className="form-inline d-flex justify-content-center">
								<input className="form-control mb-3 mx-1" placeholder="Email" />
								<button className="btn btn-primary mb-3">Get Early Access</button>
							</form>
							<small className="text-muted">
								By clicking "Get Early Access" I agree to the Polyledger{' '}
								<a href="">Terms of service</a>
							</small>
						</div>
					</div>
					<div className="block-background">
						<img src="" alt="background" />
					</div>
				</div>
				<div className="py-5 Landing__social-icons">
					<div className="container text-center">
						<div className="row">
							<div className="col-md-3 col-sm-1">
								<a href="https://twitter.com/polyledger" target="blank">
									<i className="icon icon-twitter-with-circle Landing__social-icon" />
								</a>
							</div>
							<div className="col-md-3 col-sm-1">
								<a href="https://github.com/polyledger" target="blank">
									<i className="icon icon-github-with-circle Landing__social-icon" />
								</a>
							</div>
							<div className="col-md-3 col-sm-1">
								<a href="https://www.facebook.com/getpolyledger" target="blank">
									<i className="icon icon-facebook-with-circle Landing__social-icon" />
								</a>
							</div>
							<div className="col-md-3 col-sm-1">
								<a href="https://www.linkedin.com/company/polyledger/" target="blank">
									<i className="icon icon-linkedin-with-circle Landing__social-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
