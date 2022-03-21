import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class MoreInfo extends Component {
	constructor(props) {
		super();
		this.state = {};
	}
	componentDidMount() {
		let { pid } = this.props.params;
	}

	render() {
		return <div>hELLO</div>;
	}
}
export default (props) => <MoreInfo {...props} params={useParams()} />;
