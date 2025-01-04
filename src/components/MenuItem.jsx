const MenuItem = ({ title, filter }) => {
	return (
		<div className={`col-4 col-sm-4 col-md-4 col-lg-4 menu-item isotope-item ${filter}`}>
			<div>
				<div className="text-center" style={{ fontWeight: "600" }}>
					{title}
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
