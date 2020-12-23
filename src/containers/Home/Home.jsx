import React, { useEffect, useState } from "react";
import {
	FullPage,
	HighlightPosts,
	InfoMaps,
	InfoSection,
	InstaPosts,
	SpinnerBook,
} from "../../components";
import {
	setAboutData,
	setHero,
	setInstaPosts,
	setPosts,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import {
	fetchAboutData,
	fetchBlogData,
	fetchHeroData,
	fetchInstaPost,
} from "../../api";

const Home = () => {
	const [spinner, setSpinner] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "NOOR - Coffee & Tea - Coworking Cafe";
	}, []);

	useEffect(() => {
		fetchHeroData()
			.then((data) => {
				console.log("data: ", data);
				const action = setHero(data);
				dispatch(action);
			})
			.catch((error) => console.log("error", error));
	}, [dispatch]);

	useEffect(() => {
		fetchAboutData()
			.then((data) => {
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
		fetchInstaPost()
			.then((instaPosts) => {
				let postsSort = [];
				postsSort = instaPosts.slice().sort((value1, value2) => {
					const dateValue1 = new Date(value1.publishedAt).getTime();
					const dateValue2 = new Date(value2.publishedAt).getTime();
					return dateValue1 < dateValue2 ? 1 : -1;
				});
				const action = setInstaPosts(postsSort);
				dispatch(action);
			})
			.catch((error) => console.log("error", error));
	}, [dispatch]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 3000);
	}, []);

	return (
		<div>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<FullPage />
					<InfoSection />
					<InfoMaps />
					<HighlightPosts />
					<InstaPosts />
				</>
			)}
		</div>
	);
};

export default Home;
