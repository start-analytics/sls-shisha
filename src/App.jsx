import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

import Access from "./components/Access";
import { initializeScripts } from "./assets/js/main";
import Footer from "./components/Footer";
import shishaImg from "./assets/img/shisha.jpg";
import System from "./components/System";
import RecommendedMixes from "./components/Mixes";
import Drinks from "./components/Drinks";
import Snacks from "./components/Snacks";

import ScrollTop from "./components/ScrollTop"; // Import the ScrollToTop component
import drinkImg from "./assets/img/bg43.jpg";
import snackImg from "./assets/img/snacks.jpg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
	useEffect(() => {
		initializeScripts();
	}, []);
	return (
		<Router>
			<ScrollTop />
			<Routes>
				<Route
					path="/sls-shisha"
					element={
						<>
							<Homepage />
						</>
					}
				/>
				<Route
					path="/sls-shisha/flavors"
					element={
						<>
							<Header page="flavors" />
							<Hero img={shishaImg} height="60vh" />
							<RecommendedMixes />
							<Menu />
							<Footer />
						</>
					}
				/>
				<Route
					path="/sls-shisha/drinks"
					element={
						<>
							<Header page="drinks" />
							<Hero img={drinkImg} height="60vh" />
							<Drinks />
							<Footer />
						</>
					}
				/>

				<Route
					path="/sls-shisha/snacks"
					element={
						<>
							<Header page="snacks" />
							<Hero img={snackImg} height="60vh" />
							<Snacks />
							<Footer />
						</>
					}
				/>

				<Route
					path="/sls-shisha/system"
					element={
						<>
							<Header />
							<System />
							<Footer />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
