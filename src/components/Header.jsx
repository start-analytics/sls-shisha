import { Link } from "react-router-dom";
import System from "./SystemMenu";

const sections = {
	homepage: ["home", "menu", "access"],
	flavors: ["home", "recommended-mixes", "flavors"],
	drinks: ["home"],
	snacks: ["home"],
	system: ["home"],
};

const Header = ({ page }) => {
	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<h1 className="sitename">SLS 武蔵小杉 シーシャcafe & bar</h1>
						</div>
					</Link>
					<nav id="navmenu" className="navmenu">
						<ul>
							{sections[page]?.map((item, index) => (
								<li key={index}>
									<a href={`#${item}`} className={index === 0 ? "active" : ""}>
										{item
											.replace(/-/g, " ") // Replace hyphens with spaces
											.replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
										{/* Capitalize words */}
									</a>
								</li>
							))}
						</ul>
						<i className="mobile-nav-toggle d-xl-none bi bi-list" />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
