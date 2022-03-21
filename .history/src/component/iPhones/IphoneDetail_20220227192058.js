import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IphoneDetail(props) {
	const { pid } = useParams();
	const [ singlePro, setSinglePro ] = useState([]);
	const [ [ singleProId, setSingleProId ] ] = useState(pid);

	useEffect(() => {
		async function fetchData() {
			const request_product = await axios.get('/iphones.json');
			// console.log(request_product);
			const filtered_product = request_product.data.products.filter((x) => x.product_id == pid);
			// console.log(filtered_product);
			setSinglePro(filtered_product);
		}
		fetchData();
	}, []);
	// console.log(singlePro);

	return (
		<section className=" container-fluid bold pt-4 text-center ">
			{singlePro.map((el) => {
				return (
					<div>
						<h1 className="font-weight-bold pt-4 pl-4 black ">{el.product_name}</h1>
						<h2 className="pt-2 pl-4 black mb-5">{el.product_brief_description}</h2>
						<div className="row mb-2">
							{/*Contains everything*/}
							<div className="col-sm-12 col-md-6 align-self-center single_product">
								<h5>Starting at {el.starting_price}</h5>
								<h6>{el.price_range}</h6>
								<h6 className=" ">{el.product_description}</h6>
							</div>

							{/*left side*/}
							<div className={`col-sm-12 col-md-6`}>
								{/*right side*/}
								<img src={el.product_img} alt="iphone" height="550px" width="550px" />
							</div>
						</div>
					</div>
				);
			})}
			{/*end of map*/}
		</section>
	);
}

export default IphoneDetail;
