const System = () => {
	return (
		<section id="system" className="menu section pb-2">
			<div className="section-title pb-0">
				<h2 className="d-flex align-items-center justify-content-center">System</h2>
			</div>

			<div class="container custom-container mx-auto my-5" style={{ fontWeight: "500" }}>
				{/* Row 1 */}
				<div className="row">
					<div style={{ fontWeight: "500" }} className="col text-center">
						SHISHA/台
					</div>
					<div className="col text-center">¥2,600</div>
					<div className="col text-center">(2名様毎に1台ご注文）</div>
				</div>
				{/* Row 2 */}
				<div className="row mt-4 ">
					<div className="col text-center">CHARGE/人</div>
					<div className="col text-center">¥600</div>
					<div className="col text-center">(1名様の場合無料)</div>
				</div>
				{/* Row 3 */}
				<div className="row mt-4">
					<div className="col text-center">DRINK</div>
					<div className="col text-center">¥500</div>
					<div className="col text-center">(1ドリンク制)</div>
				</div>
				{/* Row 4 */}
				<div className="row mt-4">
					<div className="col text-center  ">SEAT CHARGE</div>
					<div className="col text-center ">¥800</div>
					<div className="col text-center">（シェアされる人数毎）</div>
				</div>
			</div>
			<div style={{ textAlign: "center" }} class="container custom-container2  mx-auto my-5">
				※週末,祝日,祝前日は2.5時間制とさせていただきます。 <br />
				フード持ち込み可、ドリンク持ち込み不可となります。
			</div>
		</section>
	);
};

export default System;
