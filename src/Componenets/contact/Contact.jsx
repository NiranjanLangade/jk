import React from "react";
import Back from "../Common/back/Back";
import "./contact.css";

const Contact = () => {
	return (
		<div>
			<Back title="Contact Us" />
			<section className="contact padding">
				<div className="container shadow flexSB">
					<div className="left row">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.6137377415077!2d73.80015053804809!3d18.64819764616363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6662ad83368aca75%3A0x9c66b2f702e7af77!2sJK%20Precision%20and%20Tools!5e0!3m2!1sen!2sin!4v1709744717979!5m2!1sen!2sin"
							title="Location"
						></iframe>
					</div>
					<div className="right row">
						<h1>Contact Us</h1>
						<p>Want to communicate with us fill the form</p>
						<div className="items grid2">
							<div className="box">
								<h4>Address</h4>
								<p>
									PLOT NO 54, 8, D-II Block, MIDC, Chinchwad, Pune,
									Pimpri-Chinchwad, Maharashtra 411019
								</p>
							</div>
							<div className="box">
								<h4>Email :</h4>
								<p>jkpatpune@gmail.com</p>
							</div>
							<div className="box">
								<h4>Phone :</h4>
								<p>+91 9561350845</p>
							</div>
						</div>
						<form action="">
							<div className="flexSB">
								<input type="text" placeholder="Name" />
								<input type="email" placeholder="Email" />
							</div>
							<input type="email" placeholder="Subject" />
							<textarea cols="30" rows="10">
								Create a message here...
							</textarea>
							<button className="primary-btn">SEND MESSAGE</button>
						</form>
						<h3>Follow Us Here</h3>
						<span>FACEBOOK TWITTER INSTAGRAM</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
