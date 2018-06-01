import React, { Component } from 'react';
import labratory from '../../images/laboratory.png'
import './Methodology.css';

class Methodology extends Component {
	render() {
		return (
			<div>
				<div
					className="block text-center d-flex align-items-center"
					style={{ backgroundColor: '#f5f6fa' }}
				>
					<div className="container">
						<div className="row pt-5 mt-5">
							<div className="col-12">
								<h1 className="my-2">Methodology</h1><br />
								<img className="mb-4" src={labratory} />
								<h2>Simply making your life easier</h2>
								<p className="lead text-left">
									At Polyledger, we're making digital currency portfolios simple. We are
									truly passionate about making the experience of owning digital currency
									amazing. That's why we're trying to solve common problems faced by
									digital currency investors: high exposure to downside risk, segregation
									of accounts, and lack of expert advice.
								</p>
								<p className="lead text-left">
									We believe the future of money is digital and by 2050 there will be
									billions of people transacting with digital currency. We are deeply
									committed to pioneering digital currency investment services for the
									future.
								</p>
							</div>
						</div>
						<div className="row p-5 mt-5" style={{ backgroundColor: '#ddd' }}>
							<div className="col-12">
								<h3>Our investment approach</h3>
								<p className="text-left">
									At the heart of what we do is a focus on risk. Our team has expertise
									in risk analytics, primarily dealing with quantifying risk of
									catastrophic events. The typical Black Swan event of traditional
									financial markets may happen once or twice in a lifetime, but with
									crypto we see micro-crashes happen time and time again. By applying
									this approach to crypto, we are pioneering an innovative method for
									digital currency investing.
								</p>
							</div>
						</div>

						<div className="row pt-5 mt-5">
							<div className="col-md-6">
								<blockquote className="blockquote">
									<p className="display-4">
										"You're in control of your portfolio 100% of the time. We don't have
										access to any customer funds, which means we're in it just to help{' '}
										<em>you</em>."
									</p>
								</blockquote>
							</div>
							<div className="col-md-6">
								<h3>Trustless Investing</h3>
								<p className="text-left">
									You're in control of your portfolio 100% of the time. We don't have
									access to any customer funds, which means we're in it just to help{' '}
									<em>you</em>. Our interest is to help people make responsible and
									rewarding investments in the world's future financial system.
								</p>
								<h3 className="pt-4">Personalization</h3>
								<p className="text-left">
									Despite all the chaos in the world, we want our clients to know that
									they matter. We're here to parse through all of the misleading
									information to help you make informed investment decisions that are
									suitable to your personal goals. This is why we assess your tolerance
									for risk before offering investment advice.
								</p>
								<h3 className="pt-4">Fundamental Coin Selection</h3>
								<p>
									We perform a fundamental analysis of the coins which we consider in our
									portfolios. We only choose coins that have been around for a while, and
									we ensure that they are not likely to go away anytime soon.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Methodology;
