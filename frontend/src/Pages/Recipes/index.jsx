import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../Components/Common/Navbar";
import RecipeCard from "../../Components/RecipeCard";
import { sendRequest } from "../../config/request";

const Recipes = () => {
	const [recipes, setRecipes] = useState({
		page: 3,
		list: [],
	});

	const fetchRecipes = async () => {

		const body = {
			page: recipes.page
		}

		try {
			console.log(recipes.page);
			const response = await sendRequest({
				method: "POST",
				route: "/recipe",
				body,
			});

			setRecipes({ ...recipes, list: response.data });
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchRecipes();
	}, []);

	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Recipes"}
			/>
			<div className="navbar-page">
				<div className="container">
					<div className="recipes-container">
						{recipes.list.map((recipe) => {
							return <RecipeCard recipe={recipe} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipes;
