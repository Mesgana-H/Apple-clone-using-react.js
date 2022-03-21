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
		fetch('/iphones.json').then((res) => res.json()).then((products) => {
			const productList = products.products;
			const singleProduct = productList.filter((x) => x.product_url == this.state.productID);
			this.setState((state) => {
				return {
					products: singleProduct
				};
			});
			console.log(singleProduct);
		});
	}

	render() {
		return <div>hELLO</div>;
	}
}
export default (props) => <MoreInfo {...props} params={useParams()} />;
