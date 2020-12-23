import React from "react";
import { useSelector } from "react-redux";
import {
	CircularProgress,
	Container,
	Typography,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./Products.elements";
import { FaAngellist } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Products = () => {
	const classes = useStyles();
	const special = useSelector((state) => state.api.products.special);

	return (
		<div className={classes.products}>
			{!special ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<Container maxWidth="lg">
					<div className={classes.header}>
						<Typography variant="h4" className={classes.headerText}>
							SẢN PHẨM
						</Typography>
						<Link to="/products">
							<Button variant="contained" className={classes.button}>
								XEM THÊM
							</Button>
						</Link>
					</div>
					<div className={classes.listProduct}>
						{special.map((product, index) => (
							<div className={classes.product} key={index}>
								<div className={classes.productImage}>
									<Link to="/products">
										<LazyLoadImage
											src={product.mainImage.asset.url}
											alt={product.mainImage.asset.alt}
											className={classes.img}
											effect="blur"
										/>
										{product.new && (
											<span className={classes.newLabel}>
												new <FaAngellist />
											</span>
										)}
										{product.bestSeller && (
											<span className={classes.trendLabel}>
												<AiOutlineLike /> Bán chạy nhất
											</span>
										)}
									</Link>
								</div>
								<div className={classes.content}>
									<p className={classes.title}>{product.title}</p>
									<p className={classes.price}>{product.price}.000Đ</p>
									<Button
										variant="contained"
										className={`${classes.button} ${classes.buttonProduct}`}
									>
										TÌM HIỂU THÊM
									</Button>
								</div>
							</div>
						))}
					</div>
				</Container>
			)}
		</div>
	);
};

export default Products;