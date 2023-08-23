import React from "react";
import "./style.css";

const IngredientItem = (item) => {
 
	return (
		<div className="recipe-ingredient-item">
			<div className="ingredient-name">
				- {item.item.ingredient_name}
			</div>
			<div className="ingredient-description">{item.item.description}</div>
		</div>
	);
};

export default IngredientItem;
