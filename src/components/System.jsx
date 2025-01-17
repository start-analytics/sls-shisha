import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { initializeScrollEffect, initializeMobileNavToggle, initializeScrollspy } from "../assets/js/main";
import SystemMenu from "./SystemMenu";
import systemImg from "../assets/img/img1.png";

const System = () => {
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
			<Header page="system" />
			<Hero img={systemImg} height="60vh" />
			<SystemMenu />
			<Footer />
		</>
	);
};

export default System;
