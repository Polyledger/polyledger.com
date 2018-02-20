import React, { Component } from 'react';
import macbook from '../../images/macbook.png';
import AutomatedIcon from '../../images/automated-icon.png';
import DataDrivenIcon from '../../images/data-driven-icon.png';
import DiversifiedIcon from '../../images/diversified-icon.png';
import ConsolidatedIcon from '../../images/consolidated-icon.png';
import PersonalizedIcon from '../../images/personalized-icon.png';
import CompliantIcon from '../../images/compliant-icon.png';
import Chart from '../../components/Chart/Chart';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div>
				<div
					className="block text-center d-flex align-items-center"
					style={{ backgroundColor: '#f5f6fa' }}
				>
					<div className="container-fluid">
						<div className="row pt-5 mt-5">
							<div className="col-12">
								<h1>Digital currency portfolios made simple</h1>
								<h4 className="mb-4">Stop managing your crypto investments manually</h4>
							</div>
						</div>
						<div className="row py-5 my-5">
							<div className="col-md-6 offset-md-3 col-sm-12">
								<Chart />
							</div>
						</div>
						<div className="row py-5 my-5">
							<div className="col-12">
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
					</div>
				</div>

				<div className="block">
					<div className="container-fluid">
						<div className="row d-flex align-items-center">
							<div className="col-md-5 img-responsive">
								<img src={macbook} alt="macbook" width="100%" />
							</div>
							<div className="col-md-5 col-sm-12">
								<h6 className="text-muted text-uppercase">Sign up now</h6>
								<h2>
									Access the portfolio allocation algorithm that has 6x ROI over BTC this
									past year.
								</h2>
								<p className="lead mb-4">
									We're committed to creating new financial services for cryptoassets.
									Our first service is a portfolio allocation advisor that helps reduce
									your downside-risk while maximizing returns.
								</p>
								<div className="row">
									<div className="col-sm-6 mb-3">
										<h5>10 Cryptoassets</h5>
										<p>
											We offer 10 cryptoassets that have at least 6 months of historical
											pricing data that we believe to be safe, secure, & reliable long-term
											bets.{' '}
											<a href="" className="text-primary">
												Learn more.
											</a>
										</p>
									</div>
									<div className="col-sm-6">
										<h5>Industry Leader</h5>
										<p>
											Our backtests show that our portfolios lead the industry. See how our
											portfolios outperform Bitcoin and the Bitwise HOLD 10.{' '}
											<a href="" className="text-primary">
												Learn more
											</a>.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="block" style={{ backgroundColor: '#dcdde1' }}>
					<div className="container text-center">
						<div className="row mb-5">
							<div className="col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
								<h6 className="text-muted">Coming Soon</h6>
								<h3 className="mb-4">
									A complete digital currency portfolio management solution
								</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={DataDrivenIcon} width="150" alt="" />
								<p>
									<strong>Data-driven.</strong> Our algorithms are designed to grow and
									protect your digital wealth.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={AutomatedIcon} width="150" alt="" />
								<p>
									<strong>Automated.</strong> Your portfolio is rebalanced periodically
									to achieve your goals.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={DiversifiedIcon} width="150" alt="" />
								<p>
									<strong>Diversified.</strong> We offer access to coins covering 99% of
									the crypto market cap.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={ConsolidatedIcon} width="150" alt="" />
								<p>
									<strong>Consolidated.</strong> See the real-time value of your
									portfolio at any point in time.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={PersonalizedIcon} width="150" alt="" />
								<p>
									<strong>Personalized.</strong> We create your portfolio based on your
									risk tolerance.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={CompliantIcon} width="150" alt="" />
								<p>
									<strong>Compliant.</strong> We provide you with the necessary tax
									documents to report your income.
								</p>
							</div>
						</div>
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
