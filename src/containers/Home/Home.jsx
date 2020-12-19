import React, { useEffect, useState } from "react";
import { FullPage, InfoSection } from "../../components";
import sanityClient from "../../client";
const Home = () => {
	const [aboutData, setAboutData] = useState(null);

	useEffect(() => {
		document.title = "Noor - Coffee & Tea";
		sanityClient
			.fetch(
				`*[_type == "about"]{
			title,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
			)
			.then((data) => setAboutData(data[0]))
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<div>
			<FullPage />
			<InfoSection data={aboutData} />
		</div>
	);
};

export default Home;
