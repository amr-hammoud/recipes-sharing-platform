import React from "react";
import Navbar from "../../Components/Common/Navbar";

const CreateRecipe = () => {
	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Recipes"}
			/>
			CreateRecipe
		</div>
	);
};

export default CreateRecipe;
