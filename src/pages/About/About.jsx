import React from "react";
import { SectionLink } from "../../components";
import { AiOutlineStar } from "react-icons/ai";
import Img from "../../assets/img/developing.svg";
const feedback = {
	subHeader: "NOOR Coffee & Tea",
	header: "This feature is developing",
	description: "You can use it as soon as it possible",
	linkBtn: "/",
	contentBtn: "Trang chủ",
	img: Img,
	icon: <AiOutlineStar />,
};

const About = () => {
	return (
		<div>
			<SectionLink
				subHeader={feedback.subHeader}
				header={feedback.header}
				description={feedback.description}
				linkBtn={feedback.linkBtn}
				img={feedback.img}
				contentBtn={feedback.contentBtn}
				iconBtn={feedback.icon}
			/>
		</div>
	);
};

export default About;
