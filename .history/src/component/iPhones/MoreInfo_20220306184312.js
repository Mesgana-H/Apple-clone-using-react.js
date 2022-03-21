import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

class MoreInfo extends Component {
	constructor(props) {
		super();
		this.state = {
			siglePro: []
		};
	}
	componentDidMount() {
		let { pid } = this.props.params;
		async function fetchData() {
			const getPro = await axios.get('/iphones.json');
			// console.log(getPro.data.products);
			const filteredData = getPro.data.products.filter((x) => x.product_id == pid);
			console.log(filteredData);

			this.setState((state) => {
				return {
					siglePro: filteredData
				};
			});
		}
		fetchData();
	}

	render() {
		// console.log(this.state.siglePro);
		return (
			<div>
				<section className="internal-page-wrapper top-100">
					<div className="container">
						{this.state.siglePro.map((product) => {
							let id = product.product_url;
							let title = product.product_name;
							let img = product.product_img;
							let Brief = product.product_brief_description;
							let StartPrice = product.starting_price;
							let PriceRange = product.price_range;
							let productPage = '/iphone/' + id;
							let details = product.product_description;

							let productDiv = (
								<div key={id} className="bottom-100">
									<div className="row justify-content-center text-center bottom-50">
										<div className="col-12">
											<div className="title-wraper bold">{title}</div>
											<div className="brief-description">{Brief}</div>
										</div>
									</div>

									<div className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 my-auto`}>
											<div className="starting-price">{`Starting at ${StartPrice}`}</div>
											<div className="monthly-price">{PriceRange}</div>
											<div className="product-details">{details}</div>
										</div>

										<div className={`col-sm-12 col-md-6`}>
											<div className="prodict-image">
												<img src={img} />
											</div>
										</div>
									</div>
								</div>
							);
							return productDiv;
						})}
					</div>
				</section>
			</div>
		);
	}
}
export default (props) => <MoreInfo {...props} params={useParams()} />;
