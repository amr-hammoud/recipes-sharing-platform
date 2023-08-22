import React from "react";
import Navbar from "../../Components/Common/Navbar";

const Recipes = () => {
	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Recipes"}
			/>
		</div>
	);
};

export default Recipes;
