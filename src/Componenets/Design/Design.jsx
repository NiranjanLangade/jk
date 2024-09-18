import React from "react";
import Back from "../Common/back/Back";
import DesignCard from "./DesignCard";
import "./Design.css";

const Design = () => {
	return (
		<div>
			<div>
				<Back title="Design" />
				<section className="design padding">
					<div className="container grid">
						<DesignCard />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Design;
