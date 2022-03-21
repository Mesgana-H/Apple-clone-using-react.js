import React, { useState, useEffect } from 'react';

const Iphones = () => {
	const [ product, setProducts ] = useState([]);

	useEffect(() => {
		fetch();
	});
	return <div>This is I phones</div>;
};

export default Iphones;
