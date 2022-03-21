import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

class MoreInfo extends Component {
	constructor(props) {
		super();
		this.state = {
			siglePro: [],
			prductArr: []
		};
	}
	componentDidMount() {
		let { pid } = this.props.params;
		async function fetchData() {
			const getPro = await axios.get('/iphones.json');
			// console.log(getPro.data.products);
			const filteredData = getPro.data.products.filter((x) => (x.product_id = pid));
		}
		fetchData();
	}

	render() {
		return <div>hELLO</div>;
	}
}
export default (props) => <MoreInfo {...props} params={useParams()} />;
