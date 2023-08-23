import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../Components/Common/Navbar";
import RecipeCard from "../../Components/RecipeCard";
import { sendRequest } from "../../config/request";
import InfiniteScroll from "react-infinite-scroll-component";

const Recipes = () => {
	const [recipes, setRecipes] = useState({
		page: 1,
		list: [],
	});

	const [isLoading, setIsLoading] = useState(false)

	const fetchRecipes = async () => {
		console.log(recipes);
		const body = {
			page: recipes.page,
		};

		try {
			setIsLoading(true);
			const response = await sendRequest({
				method: "POST",
				route: "/recipe",
				body,
			});

			if (recipes.page > 1) {
				setRecipes((prevRecipes) => ({
					...prevRecipes,
					list: [...prevRecipes.list, ...response.data],
					page: prevRecipes.page + 1,
				}));
			} else {
				setRecipes((prevRecipes) => ({
					...prevRecipes,
					list: response.data,
					page: prevRecipes.page + 1,
				}));
			}
			console.log(recipes);
			
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}finally{
			setIsLoading(false);
			console.log(recipes);
		}
	};


	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Recipes"}
			/>
			<div className="navbar-page">
				<div className="container">
					<InfiniteScroll
						dataLength={recipes.list.length}
						next={fetchRecipes}
						hasMore={true}
					>
						{recipes.list.map((recipe, index) => {
							return <RecipeCard key={index} recipe={recipe} />;
						})}
					</InfiniteScroll>
					{isLoading && (
						<div className="flex center">
							<div className="spinner"></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Recipes;
