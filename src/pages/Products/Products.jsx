import React, { useEffect } from "react";

const Products = () => {
	useEffect(() => {
		document.title = "Menu - NOOR - Coffee & Tea - Coworking Cafe";
	}, []);

	return <div>Menu</div>;
};

export default Products;
