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
		<section className=" container-fluid white bold ppt-4 ">
			{product.map((el) => {
				return (
					<div className="row ">
						{/*Contains everything*/}
						<div className="col-sm-12 col-md-6">
							<div className="Name">{el.product_name}</div>
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
