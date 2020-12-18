import React, { useEffect } from "react";

const Blog = () => {
	useEffect(() => {
		document.title = "Blog - Noor - Coffee & Tea";
	}, []);

	return <div>Blog</div>;
};

export default Blog;
