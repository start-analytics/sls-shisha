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

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
	return (
		<Router>
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
							<Access />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
