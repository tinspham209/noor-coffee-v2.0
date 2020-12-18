import React, { useEffect } from "react";
import { Slider, InfoSection } from "../../components";

const Home = () => {
	useEffect(() => {
		document.title = "Noor - Coffee & Tea";
	}, []);

	return (
		<div>
			<Slider />
			<InfoSection />
		</div>
	);
};

export default Home;
