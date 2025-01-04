import background from "../assets/img/bg12.jpg";
import logo from "../assets/img/logo-shadow.png";

const Hero = () => {
	return (
		<section id="hero" className="hero section dark-background">
			<img src={background} alt="" />

			<div className="container">
				<div className="row">
					<div className="position-relative d-flex justify-content-center">
						<img style={{ height: "250px", width: "250px" }} className="position-relative" src={logo} alt="" />
					</div>

					<div className="d-flex flex-column align-items-center align-items-lg-center mt-5" style={{ textAlign: "center" }}>
						<h2 style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="main-title">
							～武蔵小杉の贅沢空間～
						</h2>
						<p style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }}>Smoke the best shisha in Japan!</p>
					</div>
				</div>
			</div>

			<div style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="scroll-down z-3">
				Scroll ↓
			</div>
		</section>
	);
};

export default Hero;
