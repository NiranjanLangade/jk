import React from "react";
import { design } from "../../dummydata";
// import Title from "../Common/title/Title";
// import "./Design.css";

const DCard = () => {
	return (
		<>
			{design.slice(0, 3).map((val, index) => (
				<div className="items shadow" key={index}>
					<div className="img">
						<img src={val.cover} alt={val.name} style={{ objectFit: 'fill' }} />
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

export default DCard;
