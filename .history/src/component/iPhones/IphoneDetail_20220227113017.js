import React, { useState } from 'react';
import axios from 'Axios';
import { useEffect } from 'react/cjs/react.production.min';

function IphoneDetail(props) {
	const [singlePro, setSinglePro] = useState([]);
	const [[singleProId, setSingleProId]] = useState(props.)

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/iphones.json');
			setSinglePro(response.products[0]);
			return response;
		}
		fetchData();
	}, []);
	console.log(singlePro);
	return <div>IphoneDetail</div>;
}

export default IphoneDetail;
