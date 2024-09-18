import React from "react";
import DCard from "./DCard"
import Title from "../Common/title/Title";
// import "./Design.css";

const Design = () => {
	return (
		<div>
			<div>
            <Title Subtitle="Design" title="Fixtures Desgined at JKPAT" />
				<section className="design padding">
					<div className="container grid">
						<DCard/>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Design;
