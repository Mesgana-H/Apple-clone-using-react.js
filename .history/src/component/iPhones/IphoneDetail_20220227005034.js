import React, { useState } from 'react';
import axios from 'Axios';
import { useEffect } from 'react/cjs/react.production.min';

function IphoneDetail() {
	const [ singlePro, setSinglePro ] = useState([]);

	useEffect(async function fetchData() {
		const response = await axios.get('/iphones.json');
		setSinglePro(response.products[0]);
	});

	return <div>IphoneDetail</div>;
}

export default IphoneDetail;
