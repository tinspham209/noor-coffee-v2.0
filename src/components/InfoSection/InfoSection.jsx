import {
	Button,
	CircularProgress,
	Container,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoSection.elements";
import { Link } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

const InfoSection = ({ data }) => {
	console.log("data: ", data);

	const classes = useStyles();
	return (
		<div className={classes.info}>
			{data ? (
				<Container maxWidth="lg">
					<div className={classes.infoRow}>
						<div className={classes.infoColumn}>
							<div className={classes.imgWrapper}>
								<img
									src={data.mainImage.asset.url}
									alt="imgWrapper"
									className={classes.img}
								/>
								<div className={classes.imgAbout}>
									<Typography variant="h3">ABOUT NOOR.</Typography>
								</div>
							</div>
						</div>
						<div className={classes.infoColumn}>
							<div className={classes.textWrapper}>
								<Typography variant="h4" className={classes.text}>
									{data.title}
								</Typography>
								<div>
									<BlockContent
										blocks={data.body}
										projectId="1nauekv7"
										dataset="production"
									/>
								</div>
								<Link to="/about">
									<Button variant="contained" className={classes.button}>
										Về chúng tôi
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			) : (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			)}
		</div>
	);
};

export default InfoSection;
