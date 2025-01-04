import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollTop() {
	const location = useLocation();

	useEffect(() => {
		// Immediately scroll to the top
		window.scrollTo(0, 0);
	}, [location]);

	return null;
}

export default ScrollTop;
