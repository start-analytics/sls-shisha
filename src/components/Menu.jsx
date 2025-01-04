import ImageGallery from "./ImageGallery";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import drink from "../assets/img/drink.png";
import sweet from "../assets/img/sweet.png";
import fruit from "../assets/img/fruit.png";
import spice from "../assets/img/spices.png";
import other from "../assets/img/other.png";

import MenuItem from "./MenuItem";
const fruits = ["レモン", "オレンジ", "グァバ", "ブルーベリー", "ストロベリー", "ピーチ", "ライチ", "キウイ", "ブラックグレープ", "アップル", "グリーンアップル", "イチジク", "ザクロ", "マンゴー", "チェリー", "グレープフルーツ", "キーライム", "パッションフルーツ", "ココナッツ", "パイナップル", "カシス", "ラズベリー", "バナナ", "アプリコット", "洋梨", "スイカ", "メロン", "柚子", "クインス"];
const sweets = ["ミルクティー", "あんこ", "ブラウンシュガー", "チョコレート", "コンデンスミルク", "ハニー", "キャラメル", "ミルク", "スウィートポテト", "バニラ", "ビスケット", "パンケーキ", "バター", "ポップコーン", "ヨーグルト", "抹茶"];
const spices = ["パンラズナ", "スプリングウォーター", "シナモン", "カシミア", "アーモンド", "カルダモン", "ピスタチオ", "レモングラス"];
const drinks = ["コーヒー", "アールグレイ", "ブラックティー", "チャイ", "ジンジャーエール", "コーラ"];
const others = ["ダブルアップル", "ミント", "ジャスミン", "シガー", "ローズ", "ヒノキ", "モヒート"];
const Menu = () => {
	return (
		<section id="flavors" className="menu section pt-5">
			<div className="section-title pb-0 mb-5">
				<h2 className="d-flex align-items-center justify-content-center">flavor</h2>
			</div>
			<div className="container isotope-layout" data-default-filter=".filter-fruit" data-layout="masonry" data-sort="original-order">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul className="menu-filters isotope-filters">
							<li className="filter-active" data-filter=".filter-fruit">
								<img src={fruit} style={{ height: 60 }} alt="" />
								<div className="mt-2">Fruit</div>
							</li>
							<li data-filter=".filter-sweet">
								<img src={sweet} style={{ height: 60 }} alt="" />
								<div className="mt-2">Sweet</div>
							</li>
							<li data-filter=".filter-spice">
								<img src={spice} style={{ height: 60 }} alt="" />
								<div className="mt-2">Spice</div>
							</li>
							<li data-filter=".filter-drink">
								<img src={drink} style={{ height: 60 }} alt="" />
								<div className="mt-2">Drink</div>
							</li>
							<li data-filter=".filter-other">
								<img src={other} style={{ height: 60 }} alt="" />
								<div className="mt-2">Other</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="isotope-container custom-container mx-auto mt-1">
					<div className="menu-container">
						{fruits.map((fruit, index) => (
							<MenuItem key={index} title={fruit} filter="filter-fruit" />
						))}
					</div>{" "}
					<div className="menu-container">
						{sweets.map((sweet, index) => (
							<MenuItem key={index} title={sweet} filter="filter-sweet" />
						))}
					</div>{" "}
					<div className="menu-container">
						{spices.map((spice, index) => (
							<MenuItem key={index} title={spice} filter="filter-spice" />
						))}
					</div>{" "}
					<div className="menu-container">
						{drinks.map((drink, index) => (
							<MenuItem key={index} title={drink} filter="filter-drink" />
						))}
					</div>{" "}
					<div className="menu-container">
						{others.map((other, index) => (
							<MenuItem key={index} title={other} filter="filter-other" />
						))}
					</div>{" "}
				</div>
			</div>
		</section>
	);
};

export default Menu;
