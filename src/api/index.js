import sanityClient from "../client";

export const fetchAboutData = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "about"]{
			title,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data[0];
		})
		.catch((error) => console.log("error", error));
};

export const fetchBlogData = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "post"]{
				title,
				slug,
				author,
				mainImage{
					asset->{
						_id,
						url
					},
					alt
				},
				body,
				publishedAt,
				description
			}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};
