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
								<form
									action="https://formspree.io/matthew@polyledger.com"
									method="POST"
									className="form-inline d-flex justify-content-center"
								>
									<input
										className="form-control mb-3 mx-1"
										name="_replyto"
										placeholder="Email"
									/>
									<input
										className="btn btn-primary mb-3"
										value="Get Early Access"
										type="submit"
									/>
								</form>
								<small className="text-muted">
									By clicking "Get Early Access" I agree to the Polyledger{' '}
									<a href="" data-toggle="modal" data-target="#termsOfService">
										Terms of service
									</a>
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
											<a href="/methodology" className="text-primary">
												Learn more.
											</a>
										</p>
									</div>
									<div className="col-sm-6">
										<h5>Industry Leader</h5>
										<p>
											Our backtests show that our portfolios lead the industry. See how our
											portfolios outperform Bitcoin and the Bitwise HOLD 10.{' '}
											<a href="/methodology" className="text-primary">
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

				<div
					class="modal fade"
					id="termsOfService"
					tabindex="-1"
					role="dialog"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Terms of Service</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<h2>Polyledger Inc. Terms of Service</h2>
								<h3>1. Terms</h3>
								<p>
									By accessing the website at{' '}
									<a href="https://polyledger.com">https://polyledger.com</a>, you are
									agreeing to be bound by these terms of service, all applicable laws and
									regulations, and agree that you are responsible for compliance with any
									applicable local laws. If you do not agree with any of these terms, you
									are prohibited from using or accessing this site. The materials
									contained in this website are protected by applicable copyright and
									trademark law.
								</p>
								<h3>2. Use License</h3>
								<ol type="a">
									<li>
										Permission is granted to temporarily download one copy of the
										materials (information or software) on Polyledger Inc.'s website for
										personal, non-commercial transitory viewing only. This is the grant of
										a license, not a transfer of title, and under this license you may
										not:
										<ol type="i">
											<li>modify or copy the materials;</li>
											<li>
												use the materials for any commercial purpose, or for any public
												display (commercial or non-commercial);
											</li>
											<li>
												attempt to decompile or reverse engineer any software contained on
												Polyledger Inc.'s website;
											</li>
											<li>
												remove any copyright or other proprietary notations from the
												materials; or
											</li>
											<li>
												transfer the materials to another person or "mirror" the materials
												on any other server.
											</li>
										</ol>
									</li>
									<li>
										This license shall automatically terminate if you violate any of these
										restrictions and may be terminated by Polyledger Inc. at any time.
										Upon terminating your viewing of these materials or upon the
										termination of this license, you must destroy any downloaded materials
										in your possession whether in electronic or printed format.
									</li>
								</ol>
								<h3>3. Disclaimer</h3>
								<ol type="a">
									<li>
										The materials on Polyledger Inc.'s website are provided on an 'as is'
										basis. Polyledger Inc. makes no warranties, expressed or implied, and
										hereby disclaims and negates all other warranties including, without
										limitation, implied warranties or conditions of merchantability,
										fitness for a particular purpose, or non-infringement of intellectual
										property or other violation of rights.
									</li>
									<li>
										Further, Polyledger Inc. does not warrant or make any representations
										concerning the accuracy, likely results, or reliability of the use of
										the materials on its website or otherwise relating to such materials
										or on any sites linked to this site.
									</li>
								</ol>
								<h3>4. Limitations</h3>
								<p>
									In no event shall Polyledger Inc. or its suppliers be liable for any
									damages (including, without limitation, damages for loss of data or
									profit, or due to business interruption) arising out of the use or
									inability to use the materials on Polyledger Inc.'s website, even if
									Polyledger Inc. or a Polyledger Inc. authorized representative has been
									notified orally or in writing of the possibility of such damage.
									Because some jurisdictions do not allow limitations on implied
									warranties, or limitations of liability for consequential or incidental
									damages, these limitations may not apply to you.
								</p>
								<h3>5. Accuracy of materials</h3>
								<p>
									The materials appearing on Polyledger Inc. website could include
									technical, typographical, or photographic errors. Polyledger Inc. does
									not warrant that any of the materials on its website are accurate,
									complete or current. Polyledger Inc. may make changes to the materials
									contained on its website at any time without notice. However Polyledger
									Inc. does not make any commitment to update the materials.
								</p>
								<h3>6. Links</h3>
								<p>
									Polyledger Inc. has not reviewed all of the sites linked to its website
									and is not responsible for the contents of any such linked site. The
									inclusion of any link does not imply endorsement by Polyledger Inc. of
									the site. Use of any such linked website is at the user's own risk.
								</p>
								<h3>7. Modifications</h3>
								<p>
									Polyledger Inc. may revise these terms of service for its website at
									any time without notice. By using this website you are agreeing to be
									bound by the then current version of these terms of service.
								</p>
								<h3>8. Governing Law</h3>
								<p>
									These terms and conditions are governed by and construed in accordance
									with the laws of California and you irrevocably submit to the exclusive
									jurisdiction of the courts in that State or location.
								</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
