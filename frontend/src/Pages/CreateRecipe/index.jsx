import "./style.css";
import { sendRequest } from "../../config/request";
import Button from "../../Components/Base/Button";
import Input from "../../Components/Base/Input";
import Navbar from "../../Components/Common/Navbar";
import React, { useEffect, useRef, useState } from "react";

const CreateRecipe = () => {
	const [data, setData] = useState({
		name: null,
		cuisine_id: null,
		ingredients: [],
		images: [],
	});

	const createRecipeHandler = async () => {
		try {
			const response = await sendRequest({
				method: "POST",
				route: "/recipe/create",
				body: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	/*
	- Images
	- Ingredients + description
	- Name
	- Cuisine
	*/

	const [cuisines, setCuisines] = useState([]);

	const loadCuisines = async () => {
		try {
			const response = await sendRequest({
				method: "GET",
				route: "/getCuisines",
			});

			setCuisines(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadCuisines();
	}, []);

	const handleCuisineChange = (selected_option) => {
		console.log(selected_option);
		setData((prev_data) => ({
			...prev_data,
			cuisine_id: selected_option.value,
		}));
		console.log(data);
	};

	const imagesInput = useRef();

	return (
		<div className="navbar-page light-bg">
			<Navbar items={["Recipes", "Shopping List", "Calendar"]} />
			<div className="container white-bg create-recipe">
				<div className="flex center color-primary mt-20">
					<h1>Create Recipe</h1>
				</div>
				<div className="create-recipe-container">
					<div className="create-recipe-column">
						<div className="create-recipe-input">
							<Input
								label={"Recipe Name"}
								placeholder={"name"}
								onChange={(first_name) =>
									setData({
										...data,
										first_name,
									})
								}
							/>
						</div>
						<div className="create-recipe-input">
							<label htmlFor="cuisines">Cuisine:</label>
							<select name="cuisines" id="cuisines">
								{cuisines?.map((cuisine, index) => {
									return (
										<option key={index} value={cuisine.id}>
											{cuisine.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className="create-recipe-input">
							{console.log(imagesInput)}
							<input
								ref={imagesInput}
								className="baseInput"
								type="file"
								name="images"
								id="images"
								multiple
								hidden
							/>
							<Button textColor={"black-text"}
							text={"Select Images"}
							onClick={() => imagesInput.current.click()}/>
						</div>
					</div>
					<div className="create-recipe-column">
						<div className="create-recipe-input">
							<label>Ingredient Name</label>
							<input
								className="roundedSmall"
								type="text"
								// onChange={(e) => onChange(e.target.value)}
								placeholder="ingredient"
								name="ingredient"
								list="ingredients"
							/>
						</div>

						<datalist id="ingredients">
							<option value={1}>1</option>
						</datalist>

						<Button
							textColor={"black-text"}
							text={"Add Ingredient"}
							onClick={() => createRecipeHandler()}
						/>
					</div>
					<div className="create-recipe-column">
						<h3>Ingredients List</h3>
						<ul>
							<li>Water</li>
							<li>Salt</li>
							<li>Sugar</li>
							<li>Tea</li>
						</ul>
					</div>
				</div>
				<div className="flex center">
					<Button
						color={"primary-bg"}
						textColor={"white-text"}
						text={"Create Recipe"}
						onClick={() => createRecipeHandler()}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateRecipe;
