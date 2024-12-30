import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Access from "./components/Access";
import { initializeScripts } from "./assets/js/main";
import Footer from "./components/Footer";
function App() {
	useEffect(() => {
		initializeScripts();

		return () => {
			// Cleanup event listeners
		};
	}, []);
	return (
		<>
			<Header />
			<Hero />
			<Menu />
			<Access />
			<Footer />
			<div id="preloader"></div>
			{/* Preloader */}
		</>
	);
}

export default App;
