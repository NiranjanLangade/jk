import React from "react";

const Head = () => {
	return (
		<div>
			<section className="head">
				<div className="container flexSB">
					<div className="logo">

						<a href="/" style={{ color: "#EB7310" }}>
                         <h1 >JK Precision and Tools</h1>
							{/* <span>Precision and Tools</span> */}
						</a>
					</div>

					<div className="socials">
						<i className="fab fa-facebook-f icon"></i>
						<i className="fab fa-instagram icon"></i>
						<i className="fab fa-twitter icon"></i>
						<i className="fab fa-youtube icon"></i>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Head;
