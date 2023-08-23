import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Common/Navbar";
import "./style.css";
import { useParams } from "react-router-dom";
import { sendRequest } from "../../config/request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Assets/auth-bg.jpg";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import IngredientItem from "../../Components/Ingredient";

const SingleRecipe = () => {
	const { id } = useParams();

	const [recipe, setRecipe] = useState({});

	const getRecipe = async () => {
		try {
			const response = await sendRequest({
				method: "GET",
				route: `/recipe/${id}`,
			});

			setRecipe(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getRecipe();
	}, [id]);

	/* 
	- Comments
	*/

	return (
		<div>
			<Navbar items={["Recipes", "Shopping List", "Calendar"]} />
			<div className="navbar-page light-bg">
				<div className="container white-bg flex center">
					<div className="recipe-container">
						<div className="carousel-container">
							<Carousel
								autoPlay={true}
								emulateTouch={true}
								infiniteLoop={true}
							>
								{recipe?.images?.map((image, index) => {
									return (
										<div key={index}>
											<img
												src={image.encoded_image}
												alt=""
											/>
										</div>
									);
								})}
							</Carousel>
						</div>
						<div className="hero-side">
							<div className="recipe-info">
								<h1 className="recipe-name">{recipe.name}</h1>
								<div className="flex spaceBetween">
									<div className="flex column">
										<div className="recipe-cuisine">
											{recipe.cuisine_name}
										</div>
										<div className="recipe-username">
											@{recipe.user_username}
										</div>
									</div>
									<div className="flex">
										<div className="recipe-actions">
											<span className="recipe-likes-counter">
												{recipe?.likes_count}
											</span>
											<div className="recipe-like-button">
												<AiTwotoneHeart />
											</div>
											<div className="recipe-share-button">
												<BsShareFill />
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr className="recipe-divider" />
							<div className="recipe-ingredients">
								<h2 className="ingredients-title">
									Ingredients
								</h2>
								{recipe?.ingredients?.map((item, index) => {
									return (
										<IngredientItem
											key={index}
											item={item}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
