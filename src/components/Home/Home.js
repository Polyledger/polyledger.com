import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import polyledger from '../../images/polyledger.png';
import macbook from '../../images/macbook.png';
import AutomatedIcon from '../../images/automated-icon.png';
import DataDrivenIcon from '../../images/data-driven-icon.png';
import DiversifiedIcon from '../../images/diversified-icon.png';
import ConsolidatedIcon from '../../images/consolidated-icon.png';
import PersonalizedIcon from '../../images/personalized-icon.png';
import CompliantIcon from '../../images/compliant-icon.png';
import BinanceLogo from '../../images/exchanges/binance.svg';
import BitstampLogo from '../../images/exchanges/bitstamp.png';
import BittrexLogo from '../../images/exchanges/bittrex.svg';
import CexLogo from '../../images/exchanges/cex.png';
import CoinbaseLogo from '../../images/exchanges/coinbase.svg';
import GDAXLogo from '../../images/exchanges/gdax.svg';
import GeminiLogo from '../../images/exchanges/gemini.svg';
import HitBTCLogo from '../../images/exchanges/hitbtc.png';
import KrakenLogo from '../../images/exchanges/kraken.png';
import PoloniexLogo from '../../images/exchanges/poloniex.png';
import './Home.css';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div>
      {status === "sending" && <div className="text-info">Sending...</div>}
      {status === "error" && (
        <div
					className="text-danger"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
					className="text-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
			<div className="form-inline d-flex justify-content-center">
	      <input
	        ref={node => (email = node)}
					className="form-control mr-2"
	        type="email"
	        placeholder="Your email"
	      />
				<button className="btn btn-primary" onClick={submit}>Get Early Access</button>
			</div>
    </div>
  );
};

class Home extends Component {
	render() {
		const url = "https://polyledger.us16.list-manage.com/subscribe/post?u=ff509ccf9b1b0cdada9cf0ffc&amp;id=213d180680";

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
								<img src={polyledger} width="100%" alt="" />
							</div>
						</div>
						<div className="row py-5 my-5">
							<div className="col-12">
								<MailchimpSubscribe
				          url={url}
				          render={({ subscribe, status, message }) => (
				            <CustomForm
				              status={status}
				              message={message}
				              onValidated={formData => subscribe(formData)}
				            />
				          )}
				        />
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

				<div className="block" style={{ backgroundColor: '#252930' }}>
					<div className="container text-center">
						<div className="row mb-5">
							<div className="col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
								<h6 style={{ color: '#00ba95' }}>Coming Soon</h6>
								<h3 className="mb-4" style={{ color: '#ffffff' }}>
									A complete digital currency portfolio management solution
								</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={ConsolidatedIcon} width="150" alt="" />
								<p style={{ color: '#ffffff' }}>
									<strong>Consolidated.</strong> See the market value of your aggregate
									portfolio. Track &amp; analyze your performance.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={AutomatedIcon} width="150" alt="" />
								<p style={{ color: '#ffffff' }}>
									<strong>Automated.</strong> Update your portfolio with one-click
									rebalancing to maintain the health of your portfolio.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={DiversifiedIcon} width="150" alt="" />
								<p style={{ color: '#ffffff' }}>
									<strong>Diversified.</strong> We offer access to coins covering 99% of
									the crypto market cap, connecting to exchanges and 1,400+ individual
									cryptoassets.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={DataDrivenIcon} width="150" alt="" />
								<p style={{ color: '#ffffff' }}>
									<strong>Smart.</strong> Our allocation engine provides recommendations
									to reduce your portfolio risk.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={PersonalizedIcon} width="150" alt="" />
								<p style={{ color: '#ffffff' }}>
									<strong>Personalized.</strong> Receive advice personalized to your
									investment strategy, objectives, and risk profile.
								</p>
							</div>
							<div className="col-md-4 px-4 mb-5">
								<img className="mb-1" src={CompliantIcon} width="150" alt="" />
								<p style={{ color: '#ffffff' }}>
									<strong>Compliant.</strong> We're streamlining the administrative
									processes of investing in crypto so you can do more.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="block" style={{ backgroundColor: '#dcdde1' }}>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3 className="text-center">
									We connect to the most popular exchanges
								</h3>
								<p className="text-center mb-5">And 1400+ individual cryptoassets</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 text-center">
								<img
									src={BinanceLogo}
									height="50"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
							<div className="col-md-4 text-center">
								<img
									src={BitstampLogo}
									height="50"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
							<div className="col-md-4 text-center">
								<img
									src={BittrexLogo}
									height="40"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 text-center">
								<img src={CexLogo} height="50" className="m-3 img-responsive" alt="" />
							</div>
							<div className="col-md-4 text-center">
								<img
									src={CoinbaseLogo}
									height="45"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
							<div className="col-md-4 text-center">
								<img src={GDAXLogo} height="50" className="m-3 img-responsive" alt="" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 text-center">
								<img
									src={GeminiLogo}
									height="50"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
							<div className="col-md-4 text-center">
								<img
									src={PoloniexLogo}
									height="40"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
							<div className="col-md-4 text-center">
								<img
									src={KrakenLogo}
									height="40"
									className="m-3 img-responsive"
									alt=""
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 offset-md-4 text-center">
								<img
									src={HitBTCLogo}
									height="60"
									className="m-3 img-responsive"
									alt=""
								/>
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
								<h6 className="text-muted text-uppercase">Sign up for early access</h6>
								<h2>
									Get advice from our portfolio allocation algorithm yielding 7x ROI over
									BTC in 2017.
								</h2>
								<p className="lead mb-4">
									We're committed to creating new financial services for cryptoassets. We
									will be launching a portfolio allocation advisor that helps reduce your
									downside-risk while maximizing returns.
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

				<div className="py-5 Home__social-icons">
					<div className="container text-center">
						<div className="row">
							<div className="col-md-3 col-sm-1">
								<a href="https://twitter.com/polyledger" target="blank">
									<i className="icon icon-twitter-with-circle Home__social-icon" />
								</a>
							</div>
							<div className="col-md-3 col-sm-1">
								<a href="https://github.com/polyledger" target="blank">
									<i className="icon icon-github-with-circle Home__social-icon" />
								</a>
							</div>
							<div className="col-md-3 col-sm-1">
								<a href="https://www.facebook.com/getpolyledger" target="blank">
									<i className="icon icon-facebook-with-circle Home__social-icon" />
								</a>
							</div>
							<div className="col-md-3 col-sm-1">
								<a href="https://www.linkedin.com/company/polyledger/" target="blank">
									<i className="icon icon-linkedin-with-circle Home__social-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div
					className="modal fade"
					id="termsOfService"
					tabIndex="-1"
					role="dialog"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Terms of Service</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
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
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
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

export default Home;
