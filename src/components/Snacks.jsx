const snacks = ["スナック (レジ前のカゴからお選びください)", "アイスクリーム", "ポッキー", "燻製ミックスナッツ"];

const Snacks = () => {
	return (
		<section id="snacks" className="menu section pb-0 pt-2 mt-5 mb-5">
			<div className="section-title pb-0 mb-5">
				<h2 className="d-flex align-items-center justify-content-center">Snacks</h2>
			</div>
			<div className="custom-container container">
				{snacks.map((snack) => (
					<div className="pb-3 text-center d-flex justify-content-between" style={{ fontWeight: "700", padding: "0 20px" }}>
						<div style={{ textAlign: "justify", paddingRight: "20px" }}>{snack}</div>
						<div>¥500</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Snacks;
