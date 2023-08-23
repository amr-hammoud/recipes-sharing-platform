import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import { sendRequest } from "../../config/request";
import { useLocation, useParams } from "react-router-dom";
import IngredientItem from "../../Components/Ingredient";
import Navbar from "../../Components/Common/Navbar";
import Popup from "../../Components/Base/Popup";
import React, { useEffect, useState } from "react";

const SingleRecipe = () => {
	const { id } = useParams();
	const location = useLocation();
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

	const [popup, setPopup] = useState({
		text: "",
		popupIsShown: false,
	});

	const handlePopup = (content) => {
		if (popup.popupIsShown) {
			setPopup({ ...popup, popupIsShown: false });
		} else {
			setPopup({ ...popup, popupIsShown: true, text: content });
		}
	};

	const handleShareButton = () => {
		const link = 'http://localhost:3000' + location.pathname;
		console.log(link);
		navigator.clipboard.writeText(link);
		handlePopup("Link Copied to Clipboard");
		setTimeout(() => setPopup({ ...popup, popupIsShown: false }),1200);
	};

	return (
		<div>
			<Navbar items={["Recipes", "Shopping List", "Calendar"]} />
			<Popup
				text={popup.text}
				popupIsShown={popup.popupIsShown}
				handlePopup={handlePopup}
			/>
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
									<div className="flex column g-5">
										<div className="recipe-cuisine">
											{recipe.cuisine_name} Cuisine
										</div>
										<div className="recipe-username">
											By @{recipe.user_username}
										</div>
									</div>
									<div className="flex">
										<div className="recipe-actions">
											<div className="flex center g-5">
												<div className="recipe-likes-counter flex center">
													{recipe?.likes_count}
												</div>
												<div className="button recipe-like-button flex center">
													<AiTwotoneHeart />
												</div>
											</div>
											<div
												className="button recipe-share-button flex center"
												onClick={() =>
													handleShareButton()
												}
											>
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
