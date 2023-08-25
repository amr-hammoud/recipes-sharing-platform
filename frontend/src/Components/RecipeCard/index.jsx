import "./style.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RecipeCard = (recipe) => {
	const navigate = useNavigate();

	const this_recipe = recipe.recipe;

	const handelNavigation = () => {
		navigate(`/recipes/${this_recipe?.id}`);
	};
	return (
		<div className="recipe-card" onClick={() => handelNavigation()}>
			<div className="recipe-card-image">
				<img
					src={this_recipe?.cover_photo}
					alt=""
				/>
				<div className="recipe-card-info"></div>
			</div>
			<div className="recipe-card-body">
				<h3 className="recipe-card-name">{this_recipe?.name}</h3>
				<div className="flex spaceBetween">
					<div className="recipe-card-cuisine">
						{this_recipe?.cuisine_name} Cuisine
					</div>
					<div className="recipe-card-likes">
						<span className="recipe-card-likes-counter">
							{this_recipe?.likes_count}
						</span>
						<AiTwotoneHeart />
					</div>
				</div>

				<div className="recipe-card-user">
					@{this_recipe?.user_username}
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
