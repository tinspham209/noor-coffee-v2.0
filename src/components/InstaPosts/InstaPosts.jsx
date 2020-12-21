import { CircularProgress, Container, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./InstaPosts.elements";

const InstaPosts = () => {
	const classes = useStyles();
	const posts = useSelector((state) => state.api.instaPosts);

	const postsSlice = posts ? posts.slice(0, 6) : null;

	return (
		<div className={classes.instaPosts}>
			{!posts ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<Container maxWidth="lg">
					<div className={classes.posts}>
						<div className={classes.header}>
							<Typography variant="h4" className={classes.headerText}>
								{" "}
								OUR INSTAGRAM
							</Typography>
							<div className={classes.headerSubtitleWrapper}>
								<Typography variant="h6" className={classes.headerSubtitle}>
									{" "}
									#NOORCoworkingCafe
								</Typography>
								<Typography variant="h6" className={classes.headerSubtitle}>
									{" "}
									#NOORCoffeeAndTea
								</Typography>
							</div>
						</div>
						<div className={classes.listImage}>
							{postsSlice.map((post, index) => (
								<a
									key={index}
									href={post.url}
									className={classes.postImgWrapper}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={post.mainImage.asset.url}
										alt={post.mainImage.asset.alt}
										className={classes.img}
									/>
								</a>
							))}
						</div>
					</div>
				</Container>
			)}
		</div>
	);
};

export default InstaPosts;
