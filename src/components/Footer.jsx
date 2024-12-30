const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container footer-top pt-0">
				<div className="social-links d-flex justify-content-center mt-4">
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sls_shisha/">
						<i className="bi bi-twitter-x" />
					</a>
					<a className="m-0" rel="noreferrer" target="_blank" href="https://www.instagram.com/sls_shisha/">
						<i className="bi bi-instagram" />
					</a>
				</div>
			</div>
			<div className="container copyright text-center mt-4">
				<p>
					© <span>Copyright</span> <strong className="px-1 sitename">SLS Shisha</strong> <span>All Rights Reserved</span>
				</p>
				<div className="credits">
					Powered by{" "}
					<a target="_blank" rel="noreferrer" href="https://startanalytics.net/">
						startanalytics.net
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
