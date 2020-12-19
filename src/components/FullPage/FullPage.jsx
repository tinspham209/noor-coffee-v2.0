import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./FullPage.elements";
import { BiMouse } from "react-icons/bi";

const FullPage = () => {
	const classes = useStyles();

	return (
		<section className={classes.slider}>
			<Container maxWidth="lg">
				<div className={classes.infoSection}>
					<div className={classes.fixedScrollDown}>
						<Typography variant="h6" className={classes.typo}>
							KÉO XUỐNG
						</Typography>
						<div className={classes.icon}>
							<BiMouse />
						</div>
					</div>
					<div className={classes.content}>
						<Typography variant="h1" className={classes.heading}>
							NOOR
						</Typography>
						<Typography variant="h4">Coffee & Tea</Typography>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default FullPage;
