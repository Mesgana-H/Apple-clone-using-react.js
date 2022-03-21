import React, { useState } from 'react';
import axios from 'Axios';
import { useEffect } from 'react/cjs/react.production.min';

function IphoneDetail() {
	phone;
	const [ singlePro, setSinglePro ] = useState([]);

	useEffect(() => {
		axios.get('/i');
	});

	return <div>IphoneDetail</div>;
}

export default IphoneDetail;
