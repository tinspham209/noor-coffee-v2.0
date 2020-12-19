import React, { useEffect } from "react";
import { FullPage, InfoSection } from "../../components";
const Home = () => {
	useEffect(() => {
		document.title = "Noor - Coffee & Tea";
	}, []);

	return (
		<div>
			<FullPage />
			<InfoSection />
		</div>
	);
};

export default Home;
