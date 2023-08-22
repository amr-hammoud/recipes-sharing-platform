import React from "react";
import Navbar from "../../Components/Common/Navbar";

const ShoppingList = () => {
	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Shopping List"}
			/>
		</div>
	);
};

export default ShoppingList;
