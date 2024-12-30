import background from "../assets/img/bg3.jpg";
const Hero = () => {return (<section id="hero" className="hero section dark-background">
    <img src={background} alt="" />
    <div className="container">
        <div className="row">
            <div className="d-flex flex-column align-items-center align-items-lg-center" style={{ textAlign: "center" }}>
                <h2 style={{ textShadow: "0 2px 9px rgb(255 255 255 / 65%)" }} className="main-title">
                    Welcome to <span>SLS Shisha</span>
                </h2>
                <p style={{ textShadow: "0 2px 9px rgb(255 255 255 / 65%)" }}>Smoke the best shisha in Japan!</p>
            </div>
        </div>
    </div>
</section>);
}

export default Hero;