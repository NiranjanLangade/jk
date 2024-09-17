import React from "react";
import Title from "../Common/title/Title";
import { homeAbout1 } from "../../dummydata";
import AWrapper from "./AWrapper";
import "./about.css";

const AboutCard = () => {
	return (
		<div>
			<section className="aboutHome">
				<div className="container flexSB">
					<div className="left row">
						<img
							src="./images/Habout.png"
							alt="Vision Misssion and Values"
							srcset=""
						/>
					</div>
					<div className="right row">
						<Title Subtitle="OUR MVMS" title="What we ensure at JKPAT" />
						<div className="items">
							{homeAbout1.map(val => (
								<div className="item flexSB">
									<div className="about">
										<img src={val.cover} alt="" srcset="" />
									</div>
									<div className="text">
										<h2>{val.title}</h2>
										<p>{val.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<AWrapper />
		</div>
	);
};

export default AboutCard;
