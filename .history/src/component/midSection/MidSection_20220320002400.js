import React from 'react';
import { data } from './midSectionData';

const TwoSections = (props) => {
	const {
		classN,
		classHead,
		head,
		head1,
		description,
		description1,
		learn,
		order,
		liClass,
		secLiClass,
		img,
		bankerClass,
		watchNow
	} = props;

	return (
		<div className="col-md-6 px-md-1">
			<div className={classN}>
				<div className="text-center">
					<div className="model ">
						<h4 className={classHead}>
							{head}
							<br />
							{head1}
						</h4>
						{img && <img src={img} alt="apple tv logo " />}
					</div>
					<div className={`forth-info black pl-sm-2 `}>
						<h5>
							{description}
							<br />
							{description1}
						</h5>
					</div>

					<div className="links-wrapper pl-2">
						<ul>
							<li className="list-inline-item ">
								{liClass && (
									<a className={`${liClass}`} href="">
										{learn}
									</a>
								)}
							</li>
							<li className="list-inline-item">
								{secLiClass && (
									<a className={`${secLiClass}`} href="">
										{order}
									</a>
								)}
							</li>
						</ul>
					</div>
					{bankerClass && <div className={` pl-4 the-banker pl-4 `} />}
					{watchNow && (
						<div className={` play-now-icon white small pt-2 `}>
							<p> {watchNow}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

function Midsection() {
	return (
		<section className=" container-fluid white bold ppt-4 ">
			<div className="row ">
				{data.map((props) => {
					return <TwoSections key={props.id} {...props} />;
				})}
			</div>
		</section>
	);
}

export default Midsection;
