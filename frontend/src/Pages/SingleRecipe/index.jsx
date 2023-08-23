import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Common/Navbar";
import "./style.css";
import { useParams } from "react-router-dom";
import { sendRequest } from "../../config/request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Assets/auth-bg.jpg";

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

	console.log(recipe);

	useEffect(() => {
		getRecipe();
	}, [id]);

	/* 
	- Images
	- Name
	- Cuisine
	- Ingredient
	- Comments
	- User Full Name
	- User username
	*/

	return (
		<div>
			<Navbar items={["Recipes", "Shopping List", "Calendar"]} />
			<div className="navbar-page light-bg">
				<div className="container white-bg">
					<div className="flex">
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
						<div className="recipe-info">
							<h2>{recipe.name}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
