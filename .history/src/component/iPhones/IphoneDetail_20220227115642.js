import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IphoneDetail(props) {
	const { pid } = useParams();
	const [ singlePro, setSinglePro ] = useState([]);
	const [ [ singleProId, setSingleProId ] ] = useState(pid);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/iphones.json');
			setSinglePro(response.products);
			return response;
		}
		fetchData();
	}, []);
	console.log(singlePro);

	return (
		<section className=" container-fluid bold pt-4 text-center ">
			<h1 className="font-weight-bold pt-4 pl-4 black ">IPhones</h1>
			<h2 className="pt-2 pl-4 black mb-5">The Best for the Brightest.</h2>

			{singlePro.map((el) => {
				return (
					<div className="row mb-2">
						{/*Contains everything*/}
						<div className={`col-sm-12 col-md-6 pr-2 pt-5 align-self-center black-reverse `}>
							<h3 className="font-weight-bold pt-4 pl-4 pt-5">{el.product_name}</h3>
							<h4 className="font-weight-bold ">{el.product_description}</h4>
							<h6>Starting at {el.starting_price}</h6>
							<p>{el.price_range}</p>
						</div>

						{/*left side*/}
						<div className={`col-sm-12 col-md-6`}>
							{/*right side*/}
							<img src={el.product_img} alt="iphone" height="550px" width="550px" />
						</div>
					</div>
				);
			})}
			{/*end of map*/}
		</section>
	);
}

export default IphoneDetail;
