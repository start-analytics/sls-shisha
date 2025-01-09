const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container footer-top pt-3 pb-2">
				<div className="social-links d-flex justify-content-center">
					{/*<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sls_shisha/">
						<i className="bi bi-twitter-x" />
					</a>*/}
					<a className="m-0" rel="noreferrer" target="_blank" href="https://www.instagram.com/sls_shisha/">
						<i className="bi bi-instagram" />
					</a>
				</div>
			</div>
			<div className="container copyright text-center mt-1">
				<p>
					© <span>Copyright</span> <strong className="px-1 sitename">SLS Shisha</strong> <span>All Rights Reserved</span>
				</p>
				<div className="credits">
					Powered by{" "}
					<a target="_blank" style={{ color: " rgb(53, 134, 239)", fontWeight: "bold", fontSize: "16px" }} rel="noreferrer" href="https://startanalytics.net/">
						startanalytics.net
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
