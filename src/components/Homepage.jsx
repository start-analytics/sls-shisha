import React, { useEffect } from "react";
import { initializeScripts } from "../assets/js/main";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Access from "../components/Access";
import shishaImg from "../assets/img/shisha.jpg";

const Homepage = () => {
	useEffect(() => {
		initializeScripts();
	}, []);

	return (
		<>
			<Header />
			<Hero />
			<section id="gallery" className="gallery section">
				<div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
					<div className="row g-0">
						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a href={shishaImg} className="glightbox" data-gallery="images-gallery">
									<div class="position-relative">
										<img src={shishaImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute" style={{ top: "50%", color: "white", left: "50%", transform: "translate(-50%, -50%)" }}>
											FLAVORS
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a data-gallery="images-gallery">
									<div class="position-relative">
										<img src={shishaImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute" style={{ top: "50%", color: "white", left: "50%", transform: "translate(-50%, -50%)" }}>
											DRINKS
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a data-gallery="images-gallery">
									<div class="position-relative">
										<img src={shishaImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute" style={{ top: "50%", color: "white", left: "50%", transform: "translate(-50%, -50%)" }}>
											FOOD
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="gallery-item">
								<a data-gallery="images-gallery">
									<div class="position-relative">
										<img src={shishaImg} alt="" className="img-fluid w-100" />
										<div className="position-absolute" style={{ top: "50%", color: "white", left: "50%", transform: "translate(-50%, -50%)" }}>
											SYSTEM
										</div>{" "}
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
