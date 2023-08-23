import React, { useEffect, useState } from "react";
import './style.css'
import { AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import recipeImage from "../../Assets/auth-bg.jpg";


const RecipeCard = (recipe) => {
	const navigate = useNavigate();

    const this_recipe = recipe.recipe

    const [base64Image, setBase64Image] = useState("")

    useEffect(() => {
        setBase64Image(this_recipe?.images[0]?.encoded_image)
    }, [])
    
	const handelNavigation = () => {
		navigate(`/recipes/${this_recipe?.id}`)
	};
	return (
		<div className="recipe-card" onClick={() => handelNavigation()}>
			<div className="recipe-card-image">
				<img src={base64Image} alt="recipe image" />
				<div className="recipe-card-info">
					<div className="recipe-card-cuisine">{this_recipe?.cuisine_name}</div>
					<div className="recipe-card-likes">
						<span className="recipe-card-likes-counter">{this_recipe?.likes_count}</span>
						<AiTwotoneHeart />
					</div>
				</div>
			</div>
			<div className="recipe-card-body">
				<h3>{this_recipe?.name}</h3>
				<div className="recipe-card-user">{this_recipe?.user_username}</div>
			</div>
		</div>
	);
};

export default RecipeCard;
