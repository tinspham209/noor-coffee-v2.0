import React, { useState, useEffect } from "react";
import { RecentPosts, Post, SpinnerBook, HeroPage } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setHeroProduct, setPosts } from "../../app/slice/fetchApi";
import { fetchBlogData, fetchHeroProduct } from "../../api";
import { useStyles } from "./Blog.elements";
import { CircularProgress, Container, Typography } from "@material-ui/core";

const Blog = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const posts = useSelector((state) => state.api.posts);
	console.log("posts: ", posts);

	const recentPosts = posts ? posts.slice(0, 3) : null;
	const heroProduct = useSelector((state) => state.api.heroProduct);

	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		if (!posts) {
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
		}
	}, [dispatch, posts]);

	useEffect(() => {
		if (!heroProduct) {
			fetchHeroProduct()
				.then((data) => {
					const action = setHeroProduct(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, heroProduct]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 200);
	}, []);

	return (
		<div className="">
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<HeroPage slides={heroProduct} />
					<div className={classes.container}>
						<Container maxWidth="lg" className={classes.blog}>
							<div className={classes.posts}>
								<div className={classes.header}>
									<Typography variant="h4" className={classes.headerText}>
										TIN TỨC
									</Typography>
								</div>
								<>
									{!posts ? (
										<div className={classes.spinner}>
											<CircularProgress />
										</div>
									) : (
										posts.map((post, index) => <Post post={post} key={index} />)
									)}
								</>
							</div>
							<div className={classes.recentPosts}>
								{!recentPosts ? (
									<div className={classes.spinner}>
										<CircularProgress />
									</div>
								) : (
									<>
										<RecentPosts posts={recentPosts} />
									</>
								)}
							</div>
						</Container>
					</div>
				</>
			)}
		</div>
	);
};

export default Blog;
