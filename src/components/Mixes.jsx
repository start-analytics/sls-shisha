const recommendedMixes = [
	{ flavor: "フレッシュシトラスミント", description: "柑橘系とミントのさっぱりとした王MIX" },
	{ flavor: "ヴァイオレットアイス", description: "ブルーベリーとアールグレイにアイス(氷)を加えることにより清涼感をプラスしています。" },
	{ flavor: "禅", description: "抹茶のフレーバーをメインに和の香りをイメージしたMIX" },
	{ flavor: "ブルーベリーアイスクリーム", description: "ブルーベリーの甘酸っぱさとアイスクリームのまろやかをイメージしたスイーツシーシャ。" },
	{ flavor: "フォレストベイシング", description: "ヒノキ＋柑橘系ミックスのウッド系シーシャ。" },
	{ flavor: "レモンチーズケーキ", description: "レモンの爽やかな風味にアイスクリームやミルクのフレーバーを使ってチーズケーキを再現。" },
	{ flavor: "GO HARADA", description: "" },

	{ flavor: "アロマバス", description: "ジャスミンとローズの華やかさとブルーベリー、ライチの果実感が合わさったフローラルミックス。" },
	{ flavor: "バニラビーンラテ", description: "カプチーノのフレーバーにバニラの風味と柔らかい甘味を感じれるミックス。" },
	{ flavor: "グリーンアールグレイ", description: "アールグレイをメインでキウイ、グァバが入ったすっきりとしたミックス。" },
	{ flavor: "ライムクラフトコーラ", description: "コーラをメインにライムとスパイス系のフレーバーが入ったミックス" },
	{ flavor: "キャンプファイヤー", description: "ヒノキのフレーバにシガーとバニラをミックスした大人な味わいのミックス。" },
];
const RecommendedMixes = () => {
	return (
		<section id="recommended-mixes" className="menu section pb-0 pt-2 mt-5">
			<div className="section-title pb-0 mb-5">
				<h2 className="d-flex align-items-center justify-content-center">Mixes</h2>
			</div>
			<div className="container isotope-layout" data-default-filter=".filter-fruit" data-layout="masonry" data-sort="original-order">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center"></div>
				</div>
				<div className="recommended-mixes custom-container mx-auto">
					<div className="mixes-grid">
						{recommendedMixes.map((mix, index) => (
							<div key={index} className="mix-item">
								<div className="pb-3 text-center" style={{ fontWeight: "700" }}>
									{mix.flavor}
								</div>
								<div className="pb-3 text-center">{mix.description}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default RecommendedMixes;
