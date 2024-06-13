import React from "react";
import Back from "../../Common/back/Back";
import SoftwareCard from "./SoftwareCard";
import "./software.css";

const Software = () => {
	return (
		<div>
			<div>
				<Back title="Software" />
				<section className="team padding">
					<div className="container grid">
						<SoftwareCard />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Software;
