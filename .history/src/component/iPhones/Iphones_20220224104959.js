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
		<section className=" container-fluid bold pt-4 ">
			<h1 className="font-weight-bold pt-4 pl-4 black text-center">IPhones</h1>
			<h2 className="font-weight-bold pt-4 pl-4 black">The Best for the Brightest.</h2>

			{product.map((el) => {
				return (
					<div className="row ">
						{/*Contains everything*/}
						<div className="col-sm-12 col-md-6">
							<div className="Name">
								<h4 className="font-weight-bold pt-4 pl-4 ">{el.product_name}</h4>
							</div>
						</div>;{/*left side*/}
						<div className="col-sm-12 col-md-6"> </div>;{/*right side*/}
					</div>
				);
			})}
			{/*end of map*/}
		</section>
	);
};

export default Iphones;
