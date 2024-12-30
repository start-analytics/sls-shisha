import ImageGallery from "./ImageGallery";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import alf_logo from "../assets/img/alf_logo.png";
import crab from "../assets/img/menu/lobster-bisque.jpg";
import hookah from "../assets/img/hookah.png";
import cocktail from "../assets/img/cocktail.png";
import fastFood from "../assets/img/fast-food.png";

import MenuItem from "./MenuItem";
const Menu = () => {
	return (
		<section id="menu" className="menu section">
			<div className="section-title pb-0 mb-5">
				<h2 className="d-flex align-items-center justify-content-center">menu</h2>
			</div>
			<div className="container isotope-layout" data-default-filter=".filter-shisha" data-layout="masonry" data-sort="original-order">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul className="menu-filters isotope-filters">
							<li className="filter-active" data-filter=".filter-shisha">
								<img src={hookah} style={{ height: 60 }} alt="" />
								<div className="mt-2">Shisha</div>
							</li>
							<li className="px-5" data-filter=".filter-drinks">
								<img src={cocktail} style={{ height: 60 }} alt="" />
								<div className="mt-2">Drinks</div>
							</li>
							<li data-filter=".filter-snacks">
								<img src={fastFood} style={{ height: 60 }} alt="" />
								<div className="mt-2">Snacks</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="row isotope-container">
					<MenuItem url={alf_logo} title="Tropical Breeze" price="$20" description="A refreshing blend of pineapple, mango, and coconut with a hint of mint." filter="filter-shisha" />
					<MenuItem url={alf_logo} title="Mystic Melon" price="$18" description="Sweet watermelon fused with a touch of cooling menthol." filter="filter-shisha" />
					<MenuItem url={alf_logo} title="Rose Delight" price="$22" description="Aromatic rose petals with subtle citrus undertones." filter="filter-shisha" />
					<MenuItem url={alf_logo} title="Blueberry Mist" price="$19" description="Juicy blueberries combined with a refreshing hint of mint." filter="filter-shisha" />
					<MenuItem url={alf_logo} title="Citrus Burst" price="$21" description="A zesty mix of lemon, orange, and grapefruit flavors." filter="filter-shisha" />
					<MenuItem url={crab} title="Mango Mojito" price="$8" description="A zesty mix of fresh mango, lime, mint leaves, and soda." filter="filter-drinks" />
					<MenuItem url={crab} title="Berry Bliss" price="$7" description="A luscious blend of strawberries, blueberries, and raspberries." filter="filter-drinks" />
					<MenuItem url={crab} title="Citrus Sparkle" price="$6" description="Orange, lemon, and lime juice with a splash of soda." filter="filter-drinks" />
					<MenuItem url={crab} title="Peach Iced Tea" price="$5" description="Refreshing iced tea infused with sweet peach flavor." filter="filter-drinks" />
					<MenuItem url={crab} title="Vanilla Latte" price="$6" description="Smooth espresso mixed with creamy vanilla syrup and steamed milk." filter="filter-drinks" />
					<MenuItem url={crab} title="Cheese Nachos" price="$10" description="Crispy tortilla chips topped with melted cheese and jalapeños." filter="filter-snacks" />
					<MenuItem url={crab} title="Spicy Wings" price="$12" description="Juicy chicken wings coated in a fiery sauce." filter="filter-snacks" />
					<MenuItem url={crab} title="Garlic Bread" price="$8" description="Warm baguette slices infused with garlic butter." filter="filter-snacks" />
					<MenuItem url={crab} title="Stuffed Mushrooms" price="$11" description="Mushrooms filled with creamy cheese and herbs, baked to perfection." filter="filter-snacks" />
					<MenuItem url={crab} title="Onion Rings" price="$9" description="Crispy golden onion rings served with a tangy dipping sauce." filter="filter-snacks" />
				</div>
			</div>
			<div className="container-fluid mt-5">
				<div className="row g-0">
					<ImageGallery url={img1} />
					<ImageGallery url={img2} />
					<ImageGallery url={img3} />
					<ImageGallery url={img4} />
				</div>
			</div>
		</section>
	);
};

export default Menu;
