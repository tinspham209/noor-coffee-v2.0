import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { MuiThemeProvider } from "@material-ui/core";
import { THEME } from "./GlobalStyle";

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<MuiThemeProvider theme={THEME}>
				<App />
			</MuiThemeProvider>
		</Provider>
	</React.Fragment>,
	document.getElementById("root")
);
