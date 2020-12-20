import React, { useEffect, useState } from "react";
import { FullPage, InfoSection, Spinner } from "../../components";
import { setAboutData } from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { fetchAboutData } from "../../api";

const Home = () => {
	const [spinner, setSpinner] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Noor - Coffee & Tea";

		fetchAboutData()
			.then((data) => {
				console.log("data: ", data);
				const action = setAboutData(data);
				dispatch(action);
			})
			.catch((error) => console.log("error", error));
	}, [dispatch]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 1000);
	}, []);

	return (
		<div>
			{spinner ? (
				<Spinner />
			) : (
				<>
					<FullPage />
					<InfoSection />
				</>
			)}
		</div>
	);
};

export default Home;
