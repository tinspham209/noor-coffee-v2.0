import React, { useEffect, useState } from "react";
import { InfoMaps, SpinnerBook, Section } from "../../components";
import grabImg from "../../assets/img/grab.png";
import loshipImg from "../../assets/img/loship.png";
const Stores = () => {
	const [spinner, setSpinner] = useState(true);
	useEffect(() => {
		document.title = "Cửa hàng - NOOR - Coffee & Tea - Coworking Cafe";
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 200);
	}, []);

	const grab = {
		subHeader: "NOOR Coffee & Tea",
		header: "Grab Food",
		description:
			'Đặt đồ uống trực tuyến và Grab mang đến tận nơi cho bạn với dịch vụ giao hàng "thần tốc"',
		linkBtn:
			"https://food.grab.com/vn/vi/restaurant/noor-coffee-tea-delivery/5-CZJVRNAAL6TDJJ",
		img: grabImg,
	};

	const loship = {
		subHeader: "NOOR Coffee & Tea",
		header: "Loship",
		description:
			'Đặt đồ uống trực tuyến và Loship mang đến tận nơi cho bạn với dịch vụ giao hàng "thần tốc"',
		linkBtn: "https://loship.vn/nocaphe",
		img: loshipImg,
	};

	return (
		<>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<InfoMaps />
					<Section
						subHeader={grab.subHeader}
						header={grab.header}
						description={grab.description}
						linkBtn={grab.linkBtn}
						img={grab.img}
					/>
					<Section
						subHeader={loship.subHeader}
						header={loship.header}
						description={loship.description}
						linkBtn={loship.linkBtn}
						img={loship.img}
						dark
					/>
				</>
			)}
		</>
	);
};

export default Stores;
