import Auth from "./Pages/Auth";
import Recipes from "./Pages/Recipes";
import SingleRecipe from "./Pages/SingleRecipe";
import CreateRecipe from "./Pages/CreateRecipe";
import ShoppingList from "./Pages/ShoppingList";
import Profile from "./Pages/Profile";
import Calendar from "./Pages/Calendar";
import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
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
        <Route path="/profile" element={<Profile />}/>
      </Routes>
		</BrowserRouter>
	);
}

export default App;
