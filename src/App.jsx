import "./App.css";
import Drinks from "./components/Drinks";
import Snacks from "./components/Snacks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Flavor from "./components/Flavor";
import System from "./components/System";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Homepage />
						</>
					}
				/>
				<Route
					path="/flavors"
					element={
						<>
							<Flavor />
						</>
					}
				/>
				<Route
					path="/drinks"
					element={
						<>
							<Drinks />
						</>
					}
				/>

				<Route
					path="/snacks"
					element={
						<>
							<Snacks />
						</>
					}
				/>

				<Route
					path="/system"
					element={
						<>
							<System />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
