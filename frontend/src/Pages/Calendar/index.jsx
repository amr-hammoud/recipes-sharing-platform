import React from "react";
import Navbar from "../../Components/Common/Navbar";

const ShoppingList = () => {
	return (
		<div>
			<Navbar
				items={["Recipes", "Shopping List", "Calendar"]}
				selected={"Calendar"}
			/>
		</div>
	);
};

export default ShoppingList;
