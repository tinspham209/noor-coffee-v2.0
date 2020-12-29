import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar, NotFound, Spinner } from "./components";
import ScrollToTop from "./utils";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "./GlobalStyle";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const SinglePost = React.lazy(() =>
	import("./containers/SinglePost/SinglePost")
);

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<CssBaseline />
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/blog" exact component={Blog} />
					<Route path="/blog/:slug" exact component={SinglePost} />
					<Route path="/products" exact component={Products} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</Suspense>
	);
}

export default App;
