import GLightbox from "glightbox"; // Import GLightbox if you're using it in the app
import Isotope from "isotope-layout"; // Import Isotope if you're using it in the app
import imagesLoaded from "imagesloaded"; // Ensure imagesLoaded is installed if needed

export const initializeScripts = () => {
	// Toggle the 'scrolled' class on the body when scrolling
	const toggleScrolled = () => {
		const selectBody = document.querySelector("body");
		const selectHeader = document.querySelector("#header");
		if (!selectHeader.classList.contains("scroll-up-sticky") && !selectHeader.classList.contains("sticky-top") && !selectHeader.classList.contains("fixed-top")) return;

		window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
	};

	// Mobile navigation toggle function
	const mobileNavToggle = () => {
		document.querySelector("body").classList.toggle("mobile-nav-active");
		const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
		mobileNavToggleBtn.classList.toggle("bi-list");
		mobileNavToggleBtn.classList.toggle("bi-x");
	};

	// Initialize GLightbox
	const initGLightbox = () => {
		GLightbox({
			selector: ".glightbox",
		});
	};

	// Initialize Isotope layout and filters
	const initIsotopeLayout = () => {
		document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
			let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
			let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
			let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

			let initIsotope;
			imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
				initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
					itemSelector: ".isotope-item",
					layoutMode: layout,
					filter: filter,
					sortBy: sort,
				});
			});

			isotopeItem.querySelectorAll(".isotope-filters li").forEach(function (filters) {
				filters.addEventListener(
					"click",
					function () {
						isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
						this.classList.add("filter-active");
						initIsotope.arrange({
							filter: this.getAttribute("data-filter"),
						});
					},
					false
				);
			});
		});
	};

	// Scrollspy for the navigation menu
	const navmenuScrollspy = () => {
		let navmenulinks = document.querySelectorAll(".navmenu a");
		navmenulinks.forEach((navmenulink) => {
			if (!navmenulink.hash) return;
			let section = document.querySelector(navmenulink.hash);
			if (!section) return;
			let position = window.scrollY + 200;
			if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
				document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
				navmenulink.classList.add("active");
			} else {
				navmenulink.classList.remove("active");
			}
		});
	};

	// Correct scrolling position for hash links
	const correctScrollingOnLoad = () => {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				setTimeout(() => {
					let section = document.querySelector(window.location.hash);
					let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
					window.scrollTo({
						top: section.offsetTop - parseInt(scrollMarginTop),
						behavior: "smooth",
					});
				}, 100);
			}
		}
	};

	// Initialize functions after the component mounts
	document.addEventListener("scroll", toggleScrolled);
	window.addEventListener("load", toggleScrolled);
	window.addEventListener("load", correctScrollingOnLoad);

	// Initialize GLightbox
	initGLightbox();

	// Initialize Isotope layout
	initIsotopeLayout();

	// Initialize mobile nav toggle
	const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
	if (mobileNavToggleBtn) {
		mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
	}

	// Hide mobile nav on same-page/hash links
	document.querySelectorAll("#navmenu a").forEach((navmenu) => {
		navmenu.addEventListener("click", () => {
			if (document.querySelector(".mobile-nav-active")) {
				mobileNavToggle();
			}
		});
	});

	// Toggle mobile nav dropdowns
	document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
		navmenu.addEventListener("click", function (e) {
			e.preventDefault();
			this.parentNode.classList.toggle("active");
			this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
			e.stopImmediatePropagation();
		});
	});

	// Scrollspy event
	window.addEventListener("load", navmenuScrollspy);
	document.addEventListener("scroll", navmenuScrollspy);

	// Preloader removal on load
	const preloader = document.querySelector("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	// Cleanup function to remove event listeners
	return () => {
		document.removeEventListener("scroll", toggleScrolled);
		window.removeEventListener("load", toggleScrolled);
		window.removeEventListener("load", correctScrollingOnLoad);
		window.removeEventListener("load", navmenuScrollspy);
		document.removeEventListener("scroll", navmenuScrollspy);
	};
};
