import React from "react";
import Navbar from "../../Components/Common/Navbar";

const SingleRecipe = () => {
	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Recipes"}
			/>
			SingleRecipe
		</div>
	);
};

export default SingleRecipe;
