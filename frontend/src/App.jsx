import Auth from "./Pages/Auth";
import Recipes from "./Pages/Recipes";
import SingleRecipe from "./Pages/SingleRecipe";
import CreateRecipe from "./Pages/CreateRecipe";
import ShoppingList from "./Pages/ShoppingList";
import Calendar from "./Pages/Calendar";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/recipes" element={<Recipes />}/>
        <Route path="/recipes/:id?" element={<SingleRecipe />}/>
        <Route path="/create" element={<CreateRecipe />}/>
        <Route path="/shopping-list" element={<ShoppingList />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
		</BrowserRouter>
	);
}

export default App;
