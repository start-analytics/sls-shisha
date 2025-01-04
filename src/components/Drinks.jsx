import sweet from "../assets/img/sweet.png";
import fruit from "../assets/img/fruit.png";

const fruits = ["レモン", "オレンジ", "グァバ", "ブルーベリー", "ストロベリー", "ピーチ", "ライチ", "キウイ", "ブラックグレープ", "アップル", "グリーンアップル", "イチジク", "ザクロ", "マンゴー", "チェリー", "グレープフルーツ", "キーライム", "パッションフルーツ", "ココナッツ", "パイナップル", "カシス", "ラズベリー", "バナナ", "アプリコット", "洋梨", "スイカ", "メロン", "柚子", "クインス"];
const sweets = ["ミルクティー", "あんこ", "ブラウンシュガー", "チョコレート", "コンデンスミルク", "ハニー", "キャラメル", "ミルク", "スウィートポテト", "バニラ", "ビスケット", "パンケーキ", "バター", "ポップコーン", "ヨーグルト", "抹茶"];
const spices = ["パンラズナ", "スプリングウォーター", "シナモン", "カシミア", "アーモンド", "カルダモン", "ピスタチオ", "レモングラス"];
const others = ["ダブルアップル", "ミント", "ジャスミン", "シガー", "ローズ", "ヒノキ", "モヒート"];
const Drinks = () => {
	return (
		<section style={{ marginTop: "140px" }} id="drinks" className="menu section pt-2">
			<div className="section-title pb-0 mb-5">
				<h2 className="d-flex align-items-center justify-content-center">Drinks</h2>
			</div>
			<div className="container isotope-layout" data-default-filter=".filter-soft" data-layout="masonry" data-sort="original-order">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul className="menu-filters isotope-filters">
							<li className="filter-active" data-filter=".filter-soft">
								<img src={fruit} style={{ height: 60 }} alt="" />
								<div className="mt-2">Soft Drinks</div>
							</li>
							<li data-filter=".filter-alchohol">
								<img src={sweet} style={{ height: 60 }} alt="" />
								<div className="mt-2">Alchohol</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="isotope-container">
					<div className="menu-item isotope-item filter-soft d-flex justify-content-center w-100">
						<div>自家製Drink</div>
					</div>
					<div className="menu-item isotope-item filter-soft d-flex justify-content-center w-100">
						<div> レモネード (水/ソーダ)</div>
					</div>
					<div className="menu-item isotope-item filter-soft d-flex justify-content-center w-100">
						<div> スパイスチャイ (HOT/ICE)</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Drinks;
