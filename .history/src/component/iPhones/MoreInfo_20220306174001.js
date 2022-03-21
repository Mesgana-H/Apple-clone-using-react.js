import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class MoreInfo extends Component {
	const { id } = useParams();
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
