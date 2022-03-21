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
		const findProduct = axios.get('/iphones.json');
		console.log(findProduct);
	}

	render() {
		return <div>hELLO</div>;
	}
}
export default (props) => <MoreInfo {...props} params={useParams()} />;
