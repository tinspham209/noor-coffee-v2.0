import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

export const estimateReadingTime = (string) => {
	const wordsPerMinute = 200;
	let result;

	let stringMergeArray = [];
	string.map((item, index) => stringMergeArray.push(item.children[0].text));
	const stringMerge = stringMergeArray.join("");

	let textLength = stringMerge.split(" ").length;
	if (textLength > 0) {
		let value = Math.ceil(textLength / wordsPerMinute);
		result = `~${value} min read`;
	}
	return result;
};
