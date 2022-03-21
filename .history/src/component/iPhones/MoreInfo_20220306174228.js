import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class MoreInfo extends Component {
	componentDidMount() {
		let { pid } = this.props.params;
		console.log(pid);
	}
	constructor() {
		super();

		this.state = {
			singlePro: 0
		};
		this.setState({ singlePro: pid });
	}

	render() {
		return <div>hELLO</div>;
	}
}
export default MoreInfo;
