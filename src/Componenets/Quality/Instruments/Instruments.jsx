import React from "react";
import Back from "../../Common/back/Back";
import InstruCard from "./InstruCard";
import "./Instruments.css";

const Instruments = () => {
	return (
		<div>
			<div>
				<Back title="Instruments" />
				<section className="design padding">
					<div className="container grid">
						<InstruCard />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Instruments;
