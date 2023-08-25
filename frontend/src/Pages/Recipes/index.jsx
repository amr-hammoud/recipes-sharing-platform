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

	const [isLoading, setIsLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	const fetchRecipes = async () => {
		if (isFetching) {
			return;
		}
		setIsFetching(true);

		try {
			setIsLoading(true);
			const response = await sendRequest({
				method: "POST",
				route: "/recipe",
				body: { page: recipes.page },
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
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
			console.log(recipes);
			setIsFetching(false);
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
			<div className="navbar-page light-bg">
				<div className="container white-bg">
					<div className="flex center color-primary mt-20">
						
					</div>
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
						<div className="flex center fullheight">
							<div className="spinner"></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Recipes;
