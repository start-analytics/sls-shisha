import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

import Access from "./components/Access";
import { initializeScrollEffect, initializeMobileNavToggle, initializeIsotopeLayouts, initializeScrollspy } from "./assets/js/main";
import Footer from "./components/Footer";
import shishaImg from "./assets/img/shisha.jpg";
import System from "./components/System";
import RecommendedMixes from "./components/Mixes";
import Drinks from "./components/Drinks";
import Snacks from "./components/Snacks";

import drinkImg from "./assets/img/bg43.jpg";
import snackImg from "./assets/img/snacks.jpg";
import systemImg from "./assets/img/img1.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	useEffect(() => {
		const cleanupScrollEffect = initializeScrollEffect();
		const cleanupMobileNavToggle = initializeMobileNavToggle(setIsMobileNavActive);
		const cleanupIsotopeLayouts = initializeIsotopeLayouts();
		const cleanupScrollspy = initializeScrollspy();

		return () => {
			cleanupScrollEffect();
			cleanupMobileNavToggle();
			cleanupIsotopeLayouts();
			cleanupScrollspy();
		};
	}, []);
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
							<Header page="flavors" />
							<Hero img={shishaImg} height="60vh" />
							<RecommendedMixes />
							<Menu />
							<Footer />
						</>
					}
				/>
				<Route
					path="/drinks"
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
					path="/snacks"
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
					path="/system"
					element={
						<>
							<Header page="system" />
							<Hero img={systemImg} height="60vh" />
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
