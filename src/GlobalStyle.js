import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "Source Sans Pro", sans-serif;
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

export default GlobalStyle;
