import { createMuiTheme } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "BebasNeue","Lato", "Source Sans Pro", sans-serif;
	}

	a, a:hover, a:focus, a:active {
      text-decoration: none;
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
`;

export const THEME = createMuiTheme({
	typography: {
		fontFamily: `"BebasNeue","Lato", "Source Sans Pro", sans-serif`,
		fontSize: 14,
	},
});

export default GlobalStyle;
