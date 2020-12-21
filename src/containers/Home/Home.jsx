import React, { useEffect, useState } from "react";
import {
	FullPage,
	HighlightPosts,
	InfoMaps,
	InfoSection,
	Spinner,
} from "../../components";
import { setAboutData, setPosts } from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { fetchAboutData, fetchBlogData } from "../../api";

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
		fetchBlogData()
			.then((posts) => {
				let postSort = [];
				postSort = posts.slice().sort((value1, value2) => {
					const dateValue1 = new Date(value1.publishedAt).getTime();
					const dateValue2 = new Date(value2.publishedAt).getTime();
					return dateValue1 < dateValue2 ? 1 : -1;
				});
				const action = setPosts(postSort);
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
					<InfoMaps />
					<HighlightPosts />
				</>
			)}
		</div>
	);
};

export default Home;
