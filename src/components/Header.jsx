import logo from "../assets/img/logo.jpg";

const Header = () => {
	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<img src={logo} style={{ borderRadius: "50%" }} className="margin-right-13" alt="logo" />
							<h1 className="sitename">SLS Shisha</h1>
						</div>
					</a>
					<nav id="navmenu" className="navmenu">
						<ul>
							<li>
								<a href="#hero" className="active">
									Home
									<br />
								</a>
							</li>
							<li>
								<a href="#menu">Menu</a>
							</li>
							<li>
								<a href="#access">Access</a>
							</li>
						</ul>
						<i className="mobile-nav-toggle d-xl-none bi bi-list" />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
