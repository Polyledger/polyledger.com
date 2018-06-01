import React, { Component } from 'react';
import './Waitlist.css';

class Waitlist extends Component {
	render() {
		return (
			<div>
				<div className="block text-center d-flex align-items-center">
					<div className="container">
						<div className="row pt-5 mt-5">
							<div className="col-12">
								<h1>Thank you!</h1>
								<h4 className="mb-4">
									We have added your email address to the signup queue.
								</h4>
							</div>
						</div>
						<div className="row py-5 my-5">
							<div className="col-8 offset-2">
								<div className="card">
									<img class="card-img-top" src="" alt="" />
									<div class="card-body">
										<h2 class="card-title">354,611 people ahead of you</h2>
										<p class="card-text">
											This reservation is held for matthew@polyledger.com. Is this{' '}
											<a href="">not you?</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row py-5 my-5">
							<div className="col-12">
								<h2>Interested in priority access?</h2>
								<p className="lead">
									Get early access by referring your friends. The more friends that join,
									the sooner you'll get access.
								</p>
								<a class="btn btn-primary mx-2" role="button" style={{ color: '#fff' }}>
									<i className="icon icon-twitter" /> Tweet
								</a>
								<a class="btn btn-primary mx-2" role="button" style={{ color: '#fff' }}>
									<i className="icon icon-facebook" /> Share
								</a>
								<a class="btn btn-primary mx-2" role="button" style={{ color: '#fff' }}>
									<i className="icon icon-mail" /> Email
								</a>
								<a class="btn btn-primary mx-2" role="button" style={{ color: '#fff' }}>
									<i className="icon icon-linkedin" /> Share
								</a>
							</div>
						</div>
						<div className="row py-5 my-5">
							<div className="col-12">
								<p className="lead">Or share this unique link:</p>
								<p>https://www.polyledger.com/?ref=o3naph</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Waitlist;
