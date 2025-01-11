import React, { useEffect, useState } from "react";
import shishaImg from "../assets/img/shisha.jpg";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import RecommendedMixes from "../components/Mixes";
import { initializeScrollEffect, initializeMobileNavToggle, initializeScrollspy } from "../assets/js/main";

const Flavor = () => {
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
			<Header page="flavors" />
			<Hero img={shishaImg} height="60vh" />
			<RecommendedMixes />
			<Menu />
			<Footer />
		</>
	);
};

export default Flavor;
