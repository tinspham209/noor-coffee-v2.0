import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";

export const useStyles = makeStyles((theme) => ({
	products: {
		color: "black",
		padding: "80px 0",
		background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
		[theme.breakpoints.down("md")]: {},
	},
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	headerText: {
		color: "rgba(246,194,73, 1)",
		fontWeight: 600,
		position: "relative",

		"&::before": {
			content: '""',
			position: "absolute",
			bottom: "0",
			width: "70%",
			border: "2px solid rgba(246,194,73, 1)",
		},
	},
	button: {
		borderRadius: "20px",
		fontSize: "20px",
		background: "rgba(246,194,73, 1)",
		color: "white",
		fontWeight: "bold",
		margin: "5px 0",
		transition: "all 0.3s ease-in-out",

		"&:hover": {
			background: "rgba(246,194,73, 0.9)",
			color: "black",
		},

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	buttonProduct: {
		maxWidth: "190px",
		[theme.breakpoints.down("md")]: {
			fontSize: "17px",
		},
	},
	listProduct: {
		marginTop: "50px",
		display: "flex",
		flexWrap: "wrap",
	},
	product: {
		background: "transparent",
		margin: "0 15px 30px",
		minHeight: "145px",
		flex: "0 0 calc(33.333% - 30px)",
		overflow: "hidden",

		[theme.breakpoints.down("md")]: {
			flex: "0 0 calc(50% - 30px)",
		},
	},
	productImage: {
		position: "relative",
	},
	img: {
		width: "100%",
		border: "none",
		maxWidth: "100%",
		height: "auto",
		verticalAlign: "middle",
		borderRadius: "10px",
	},
	newLabel: {},

	trendLabel: {
		content: '""',
		color: "white",
		backgroundColor: "#ec8b38",

		padding: "0 7px",
		borderLeft: "1px solid black",
		borderTop: "1px solid black",
		borderBottom: "1px solid black",

		fontSize: "18px",
		fontWeight: "700",
		lineHeight: "35px",

		textAlign: "center",
		textTransform: "uppercase",

		position: "absolute",
		bottom: "20px",
		right: "0px",
		zIndex: "9",

		[theme.breakpoints.down("md")]: {
			fontSize: "12px",
			lineHeight: "25px",
		},
	},

	content: {
		padding: "12px 0 0",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	title: {
		fontSize: "24px",
		textTransform: "uppercase",
		fontWeight: "600",
		height: "53px",
		lineHeight: "26px",
		overflow: "hidden",
		display: "block",
		// eslint-disable-next-line
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: "2",
	},
	price: {
		margin: "10px 0",
		fontSize: "32px",
		color: "rgba(246,194,73, 1)",
		overflow: "hidden",
		display: "block",
	},
}));
