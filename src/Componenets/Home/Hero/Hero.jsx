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
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Quibusdam molestiae aliquid adipisci, tempora facere sint tenetur
							id perspiciatis, amet officiis odit quisquam nemo praesentium.
							Laboriosam, pariatur? Dolore adipisci natus soluta.
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
