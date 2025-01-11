import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { initializeScrollEffect, initializeMobileNavToggle, initializeScrollspy } from "../assets/js/main";
import drinkImg from "../assets/img/bg43.jpg";
import DrinksMenu from "./DrinksMenu";

const Drinks = () => {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	useEffect(() => {
		const cleanupScrollEffect = initializeScrollEffect();
		const cleanupMobileNavToggle = initializeMobileNavToggle(setIsMobileNavActive);
		const cleanupScrollspy = initializeScrollspy();

		return () => {
			cleanupScrollEffect();
			cleanupMobileNavToggle();
			cleanupScrollspy();
		};
	}, []);
	return (
		<>
			<Header page="drinks" />
			<Hero img={drinkImg} height="60vh" />
			<DrinksMenu />
			<Footer />
		</>
	);
};

export default Drinks;
