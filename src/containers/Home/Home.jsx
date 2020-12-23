import React, { useEffect, useState } from "react";
import {
	FullPage,
	HighlightPosts,
	InfoMaps,
	InfoSection,
	InstaPosts,
	Products,
	SpinnerBook,
} from "../../components";
import {
	setAboutData,
	setHero,
	setInstaPosts,
	setPosts,
	setProductCoffee,
	setProductColdbrew,
	setProductJuice,
	setProductMacchiato,
	setProductSpecial,
	setProductTea,
	setProductYogurt,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
	fetchAboutData,
	fetchBlogData,
	fetchHeroData,
	fetchInstaPost,
	fetchProduct,
} from "../../api";
import {
	COFFEE,
	COLDBREW,
	JUICE,
	MACCHIATO,
	TEA,
	YOGURT,
} from "../../app/ItemTypes";

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
		fetchProduct()
			.then((products) => {
				console.log("products: ", products);
				const special = [];

				const coffee = [];
				const coldbrew = [];
				const tea = [];
				const macchiato = [];
				const yogurt = [];
				const juice = [];

				products.map((product, index) => {
					if (product.projectType === COFFEE) coffee.push(product);
					else if (product.projectType === COLDBREW) coldbrew.push(product);
					else if (product.projectType === TEA) tea.push(product);
					else if (product.projectType === MACCHIATO) macchiato.push(product);
					else if (product.projectType === YOGURT) yogurt.push(product);
					else if (product.projectType === JUICE) juice.push(product);

					product.special && special.push(product);

					return null;
				});
				let action;
				action = setProductCoffee(coffee);
				dispatch(action);
				action = setProductColdbrew(coldbrew);
				dispatch(action);
				action = setProductTea(tea);
				dispatch(action);
				action = setProductMacchiato(macchiato);
				dispatch(action);
				action = setProductYogurt(yogurt);
				dispatch(action);
				action = setProductJuice(juice);
				dispatch(action);
				action = setProductSpecial(special);
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
					<LazyLoadComponent>
						<InfoSection />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<InfoMaps />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<HighlightPosts />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<InstaPosts />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<Products />
					</LazyLoadComponent>
				</>
			)}
		</div>
	);
};

export default Home;
