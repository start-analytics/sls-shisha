import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<Link to="/sls-shisha" className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<h1 className="sitename">SLS 武蔵小杉 シーシャcafe & bar</h1>
						</div>
					</Link>
					<nav id="navmenu" className="navmenu">
						<ul>
							<li>
								<Link to="/sls-shisha" className="active">
									Home
									<br />
								</Link>
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
