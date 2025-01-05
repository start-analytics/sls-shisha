import softDrink from "../assets/img/soft-drink.png";
import alchoholDrink from "../assets/img/drink.png";

const drinks = [
	{ name: "レモネード (水/ソーダ)", price: 700 },
	{ name: "スパイスチャイ (HOT/ICE)", price: 700 },
	{ name: "コーヒー (HOT/ICE)", price: 600 },
	{ name: "烏龍茶", price: 500 },
	{ name: "緑茶", price: 500 },
	{ name: "ジャスミン茶", price: 500 },
	{ name: "紅茶/HOT/ICE (マリアージュフレール)", price: 600 },
	{ name: "オレンジジュース", price: 500 },
	{ name: "グレープフルーツジュース", price: 500 },
	{ name: "パイナップルジュース", price: 500 },
	{ name: "アップルジュース", price: 500 },
	{ name: "コーラ", price: 500 },
	{ name: "ジンジャーエール", price: 500 },
	{ name: "メロンソーダ", price: 500 },
	{ name: "レッドブル", price: 700 },
	{ name: "ペリエ", price: 500 },
	{ name: "トニックウォーター", price: 500 },
];

const alchohol = [
	{ name: "スパイスラムチャイ", price: 850 },
	{ name: "ウォッカレモネード", price: 850 },
	{ name: "レッドブルウォッカ", price: 900 },
	{ name: "ソコジンジャー", price: 800 },
	{ name: "チャイナブルー", price: 800 },
	{ name: "ジャックコーク", price: 800 },
	{ name: "ハイネケン", price: 800 },
	{ name: "ハートランド", price: 800 },
	{ name: "ジャックダニエル", price: 800 },
	{ name: "知多", price: 900 },
	{ name: "グレンモーレンジィ", price: 900 },
	{ name: "タリスカー", price: 900 },
	{ name: "カリラ", price: 1000 },
	{ name: "ラフロログ", price: 1100 },
	{ name: "カルーア", price: 700 },
	{ name: "ティフィン", price: 700 },
	{ name: "カシス", price: 700 },
	{ name: "マリブ", price: 700 },
	{ name: "ミスティア", price: 700 },
	{ name: "アマレット", price: 700 },
	{ name: "ボンベイサファイア", price: 700 },
	{ name: "桜尾ジン オリジナル", price: 800 },
	{ name: "ヘンドリクスジン", price: 900 },
	{ name: "NO.3 ロンドンドライジン", price: 900 },
	{ name: "ピナクルウォッカ", price: 700 },
	{ name: "ハバナクラブ", price: 700 },
	{ name: "マイヤーズラム", price: 700 },
	{ name: "アイスティーハイ", price: 700 },
	{ name: "レモンサワー", price: 600 },
	{ name: "ジャスミンハイ", price: 600 },
	{ name: "ウーロンハイ", price: 600 },
	{ name: "緑茶ハイ", price: 600 },
];

const Drinks = () => {
	return (
		<section id="drinks" style={{ marginTop: "60px" }} className="menu section pb-5 pt-2">
			<div className="container isotope-layout" data-default-filter=".filter-soft" data-layout="masonry" data-sort="original-order">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul className="menu-filters isotope-filters">
							<li className="filter-active" data-filter=".filter-soft">
								<img src={softDrink} style={{ height: 60 }} alt="" />
								<div className="mt-2">Soft Drinks</div>
							</li>
							<li data-filter=".filter-alchohol">
								<img src={alchoholDrink} style={{ height: 60 }} alt="" />
								<div className="mt-2">Alchohol</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="isotope-container custom-container mx-auto mt-4">
					<div className="container isotope-layout" data-default-filter=".filter-soft" data-layout="masonry" data-sort="original-order">
						<div className="custom-container mx-auto">
							<div className="isotope-item filter-soft w-100">
								<div className="mixes-grid ">
									{drinks.map((drink, index) => (
										<div key={index} className="mix-item ">
											<div className="pb-3 text-center d-flex justify-content-between" style={{ fontWeight: "700", padding: "0 20px" }}>
												<div style={{ textAlign: "justify", paddingRight: "20px" }}>{drink.name}</div>
												<div>¥{drink.price}</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="isotope-item filter-alchohol w-100">
								<div className="mixes-grid ">
									{alchohol.map((drink, index) => (
										<div key={index} className="mix-item ">
											<div className="pb-3 text-center d-flex justify-content-between" style={{ fontWeight: "700", padding: "0 20px" }}>
												<div>{drink.name}</div>
												<div>¥{drink.price}</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Drinks;
