import React from 'react';
import arcade from '../../resources/';

const Section6 = () => {
	return (
		<div>
			<section className=" container-fluid pb-md-2">
				<div className="row">
					<div className="col-md-6  px-md-1">
						{/* <!-- 8th highlight arcade--> */}
						<div className="eighth-highlight-wrapper mt-2 ">
							<div className="col-12 text-center">
								<div className="tv-plus-logo pt-5 pt-md-4">
									<img src={arcade} alt="apple tv logo " />
								</div>
								<div className="eight-info white py-2 px-md-3">
									<p>Agent 8 is a small hero on a big mission.</p>
								</div>
								<div className="arcade-links links-wrapper text-center pr-3">
									<ul>
										<li className="list-unstyled pb-1 ">
											<a href="">
												Play now<sup>2</sup>
											</a>
										</li>
										<a className="" href="">
											Learn about Apple
										</a>
										<li className="list-unstyled py-2 ">
											<a href="">Arcade</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- 9th highlight Apple card--> */}
					<div className="col-md-6  px-md-1">
						<div className=" ninth-highlight-wrapper mt-2 ">
							<div className=" ">
								<div className="card-info-model black pt-4 pb-1 text-center">
									<h3>Apple Card Monthly Installment.</h3>
								</div>
								<div className="card-info small pb-2 px-5 text-center px-md-0">
									<p>Pay for your next iPhone over time, interest-free with Apple Card.</p>
								</div>
								<div className="arcade-links links-wrapper text-center pr-4 ">
									<ul>
										<li className="list-unstyled pb-0">
											<a href="">Learn more</a>
										</li>
										<li className="list-unstyled ">
											<a href="">Apply now</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Section6;
