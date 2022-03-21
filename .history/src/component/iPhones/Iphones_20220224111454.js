import React, { useState, useEffect } from 'react';

const Iphones = () => {
	const [ product, setProducts ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/iPhones').then((response) => response.json()).then((data) => {
			setProducts(data.products);
		});
	}, []);
	console.log(product);

	return (
		<section className=" container-fluid bold pt-4 text-center ">
			<h1 className="font-weight-bold pt-4 pl-4 black ">IPhones</h1>
			<h2 className="font-weight-bold pt-4 pl-4 black">The Best for the Brightest.</h2>

			{product.map((el) => {
				return (
					<div className="row ">
						{/*Contains everything*/}
						<div className="col-sm-12 col-md-6">
							<h4 className="font-weight-bold pt-4 pl-4 ">{el.product_name}</h4>
							<h6 className="font-weight-bold ">{el.product_brief_description}</h6>
							<h6>Starting at {el.starting_price}</h6>
							<p>{el.price_range}</p>
							<div className="links-wrapper ">
								<ul>
									<li className="list-inline-item">
										<a href="">Learn more</a>
									</li>
								</ul>
							</div>
						</div>
						{/*left side*/}
						<div className="col-sm-12 col-md-6"> </div>;{/*right side*/}
						<img src={el.product_img} alt="iphone" width="408px " />
					</div>
				);
				mm;
			})}
			{/*end of map*/}
		</section>
	);
};

export default Iphones;
