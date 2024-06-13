import React from "react";
import Back from "../../Common/back/Back";
import CertificateCard from "./CertificateCard";
import "./certificate.css";

const Certificate = () => {
	return (
		<div>
			<Back title="Certification" />
			<section className="team padding">
				<div className="container grid">
					<CertificateCard />
				</div>
			</section>
		</div>
	);
};

export default Certificate;
