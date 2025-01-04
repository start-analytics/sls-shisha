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
import img4 from "./assets/img/cloud2.png";

function App() {
	useEffect(() => {
		initializeScripts();
	}, []);
	return (
		<>
			<Header />
			<Hero />
			<System />
			<RecommendedMixes />
			<Menu />
			<Drinks />
			<Access />
			<Footer />
		</>
	);
}

export default App;
