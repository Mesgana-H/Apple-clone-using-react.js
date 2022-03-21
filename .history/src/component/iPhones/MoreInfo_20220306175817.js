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
		axios.get('/iphones.json').then((response) => console.log(response.data.products));
	}

	render() {
		return <div>hELLO</div>;
	}
}
export default (props) => <MoreInfo {...props} params={useParams()} />;
