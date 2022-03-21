import React, { useState } from 'react';
import axios from 'Axios';
import { useEffect } from 'react/cjs/react.production.min';

function IphoneDetail(props) {
	const [ singlePro, setSinglePro ] = useState([]);
	const [ [ singleProId, setSingleProId ] ] = useState(props.match.params.pid);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/iphones.json');
			setSinglePro(response.products[singleProId]);
			return response;
		}
		fetchData();
	}, []);
	console.log(singlePro);
	return <div>IphoneDetail</div>;
}

export default IphoneDetail;
