import React from "react";
import Navbar from "../../Components/Common/Navbar";

const Recipes = () => {
	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
			/>
		</div>
	);
};

export default Recipes;
