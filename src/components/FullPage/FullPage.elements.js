import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/img/anh-bia.webp";

export const useStyles = makeStyles((theme) => ({
	slider: {
		width: "100%",
		height: "calc( 100vh - 80px)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: `url(${background}) center center/cover no-repeat`,
		backgroundColor: "#cab9a9",
	},
	fixedScrollDown: {
		position: "absolute",
		bottom: "1%",
		left: "50%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		color: "white",

		[theme.breakpoints.down("md")]: {
			left: "40%",
		},
	},
	icon: {
		fontSize: "40px",
		animation: `$pulse 2s infinite`,
		WebkitAnimation: `$pulse 2s infinite`,
	},
	typo: {
		"&::before": {
			content: '""',
			position: "absolute",
			top: "28px",
			width: "100%",
			border: "2px solid white",
		},
	},

	infoSection: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: "10px",
		color: "white",

		padding: "20px 10px",
	},

	heading: {
		fontSize: "200px",
		textShadow: "-10px 8px #000",
		fontWeight: "500",

		[theme.breakpoints.down("md")]: {
			fontSize: "120px",
		},
	},

	"@keyframes pulse": {
		"0%": {
			webkitTransform: "translate(0, 0)",
			transform: "translate(0, 0)",
		},
		"50%": {
			webkitTransform: "translate(0, 10px)",
			transform: "translate(0, 10px)",
		},
		"100%": {
			webkitTransform: "translate(0, 0)",
			transform: "translate(0, 0)",
		},
	},
}));
