import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { initializeScrollEffect, initializeMobileNavToggle, initializeScrollspy } from "../assets/js/main";
import snackImg from "../assets/img/snacks.jpg";
import SnacksMenu from "./SnacksMenu";

const Snacks = () => {
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
			<Header page="snacks" />
			<Hero img={snackImg} height="60vh" />
			<SnacksMenu />
			<Footer />
		</>
	);
};

export default Snacks;
