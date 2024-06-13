import React from "react";
import "./Hero.css";
import Title from "../../Common/title/Title";
const Hero = () => {
	return (
		<div>
			<section className="hero">
				<div className="container">
					<div className="row">
						<Title
							Subtitle="Welcome to JKPAT"
							title="Crafting Innovation Beyond Measure"
						/>
						<p>
							We are in a business of "Design, Development, Manufacture & Supply
							of Jigs, Fixtures, Relation gauges & allied spares”
						</p>

						<div className="button">
							<button className="primary-btn">
								Visit Us <i class="fa-solid fa-map-pin"></i>
							</button>
							<button className="btn">
								Enquiry <i class="fa fa-long-arrow-alt-right"></i>
							</button>
						</div>
					</div>
				</div>
			</section>
			<div className="margin"></div>
		</div>
	);
};

export default Hero;
