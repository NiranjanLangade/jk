import React from "react";
import { software } from "../../../dummydata";
import "./software.css";

const CertificateCard = () => {
	return (
		<>
			{software.map(val => (
				<div className="items shadow">
					<div className="img">
						<img src={val.cover} alt="" />
						{/* <div className="overlay">
							<i className="fab fa-facebook-f icon"></i>
							<i className="fab fa-twitter icon"></i>
							<i className="fab fa-instagram icon"></i>
						</div> */}
					</div>
					<div className="details">
						<h2>{val.name}</h2>
						<p>{val.work}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default CertificateCard;
