import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

import Access from "./components/Access";
import { initializeScripts } from "./assets/js/main";
import Footer from "./components/Footer";
import shishaGirl from "./assets/img/girl_shisha.jpg";
import shisha from "./assets/img/shisha.jpg";
import System from "./components/System";
import RecommendedMixes from "./components/Mixes";
import Drinks from "./components/Drinks";
import ScrollTop from "./components/ScrollTop"; // Import the ScrollToTop component

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
							<Header />
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
							<Header />
							<Drinks />
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
