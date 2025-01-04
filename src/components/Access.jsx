const Access = () => {
	return (
		<section id="access" className="contact section">
			{/* Section Title */}
			<div className="section-title pb-0 mb-5 mt-2">
				<h2 className="d-flex align-items-center justify-content-center">Access</h2>
			</div>
			{/* End Section Title */}
			<div className="mb-5 pt-2 container">
				<iframe
					title="maps"
					style={{
						border: 0,
						width: "100%",
						height: 500,
					}}
					src="https://maps.google.com/maps?q=sls%20shish&t=&z=13&ie=UTF8&iwloc=&output=embed"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
			{/* End Google Maps */}
			<div className="container">
				<div className="row gy-4">
					<div>
						<div className="d-md-flex justify-content-between align-items-start">
							<div>
								<div className="info-item d-flex">
									<i className="bi bi-geo-alt flex-shrink-0" />
									<div>
										<div style={{ color: "black" }}>Location</div>
										<p>〒211-0004 Kanagawa, Kawasaki, Nakahara Ward, Shinmarukohigashi, 2 Chome−924-47 シャンティ加藤 3F</p>
									</div>
								</div>
								<div className="d-md-flex">
									<div className="info-item d-flex m-0 mt-4 margin-right-20">
										<i className="bi bi-telephone flex-shrink-0" />
										<div>
											<div style={{ color: "black" }}>Call Us</div>
											<a
												style={{
													color: "rgba(255, 255, 255, 0.7)",
													fontSize: 14,
												}}
												href="tel:+81444225800"
											>
												+81 44-422-5800
											</a>
										</div>
									</div>
									{/* End Info Item */}
									<div className="info-item d-flex m-0 mt-4 mb-4">
										<i className="bi bi-envelope flex-shrink-0" />
										<div>
											<div style={{ color: "black" }}>Email Us</div>
											<p>info@example.com</p>
										</div>
									</div>
									{/* End Info Item */}
								</div>
							</div>
							<div className="info-item d-flex m-0 lh-lg">
								<div>
									<h3 style={{ color: "black" }}>Open Hours</h3>{" "}
									<p>
										<b>月〜木:</b> 14:00〜2:00
									</p>
									<p>
										<b>金:</b> 14:00〜4:00
									</p>
									<p>
										<b>土:</b> 13:00〜4:00
									</p>
									<p>
										<b>日:</b> 13:00〜2:00
									</p>
								</div>
							</div>
						</div>
						{/* End Info Item */}
					</div>
					{/* End Contact Form */}
				</div>
			</div>
		</section>
	);
};
export default Access;
