import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Access from "../components/Access";
import shishaImg from "../assets/img/flavors.jpg";
import drinkImg from "../assets/img/img3.jpg";
import systemImg from "../assets/img/img1.png";
import snackImg from "../assets/img/snacks.jpg";
import { initializeMobileNavCloseOnLinkClick, initializeScrollEffect, initializeMobileNavToggle, initializeScrollspy } from "../assets/js/main";

const Homepage = () => {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	useEffect(() => {
		const cleanupScrollEffect = initializeScrollEffect();
		const cleanupMobileNavToggle = initializeMobileNavToggle(setIsMobileNavActive);
		const cleanupScrollspy = initializeScrollspy();
		const cleanupMobileNavClose = initializeMobileNavCloseOnLinkClick();

		return () => {
			cleanupScrollEffect();
			cleanupMobileNavToggle();
			cleanupScrollspy();
			cleanupMobileNavClose();
		};
	}, []);
	return (
		<>
			<Header page="homepage" />
			<Hero />
			<section id="menu" className="menu section">
				{/* Section Title */}
				<div className="section-title pb-0 mb-5 mt-2">
					<h2 className="d-flex align-items-center justify-content-center">Menu</h2>
				</div>
			</section>
			<section style={{ paddingTop: "0px" }} id="gallery" className="gallery section">
				<div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
					<div className="row g-0">
						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a href="/flavors">
									<div className="position-relative custom-img">
										<img src={shishaImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute  custom-text">フレーバー</div>
									</div>
								</a>
							</div>
						</div>

						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a href="/drinks">
									{" "}
									<div className="position-relative">
										<img src={drinkImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute  custom-text">ドリンク</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a href="/snacks">
									<div className="position-relative custom-img">
										<img src={snackImg} alt="" className="img-fluid w-100 " />
										<div className="position-absolute custom-text">スナック</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a href="/system">
									<div className="position-relative">
										<img src={systemImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute  custom-text">システム</div>{" "}
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Access />
			<Footer />
		</>
	);
};

export default Homepage;
