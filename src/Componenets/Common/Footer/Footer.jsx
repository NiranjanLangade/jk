import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<section className="newsletter">
				<div className="container flexSB">
					<div className="left row">
						<h1>Newsletter - Stay tune and get the latest update</h1>
						<span>Far far away, behind the word mountains</span>
					</div>
					<div className="right row">
						<input type="text" placeholder="Enter email address" />
						<i className="fa fa-paper-plane"></i>
					</div>
				</div>
			</section>
			<footer>
				<div className="container padding">
					<div className="box logo">
						<h1>JKPAT</h1>
						<span>Crafting Innovation beyong measure</span>
						<p>
                        We are in a business of &quot;Design, Development, Manufacture
                        &amp; Supply of Jigs, Fixtures, Relation gauges &amp; allied spares”
						</p>

						<i className="fab fa-facebook-f icon"></i>
						<i className="fab fa-twitter icon"></i>
						<i className="fab fa-instagram icon"></i>
					</div>
					<div className="box link">
						<h3>Explore</h3>
						<ul>
							<li>Organisation</li>
							<li>Design</li>
							<li>Manufacturing</li>
							<li>News & Events</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className="box link">
						<h3>Quick Links</h3>
						<ul>
							<li>Contact Us</li>
							<li>Team</li>
							<li>Terms & Conditions</li>
							<li>Privacy</li>
							<li>Feedbacks</li>
						</ul>
					</div>
					<div className="box">
						<h3>Recent Post</h3>
						{blog.slice(0, 3).map(val => (
							<div className="items flexSB">
								<div className="img">
									<img src={val.cover} alt="" />
								</div>
								<div className="text">
									<span>
										<i className="fa fa-calendar-alt"></i>
										<label htmlFor="">{val.date}</label>
									</span>
									<span>
										<i className="fa fa-user"></i>
										<label htmlFor="">{val.type}</label>
									</span>
									<h4>{val.title.slice(0, 40)}...</h4>
								</div>
							</div>
						))}
					</div>
					<div className="box last">
						<h3>Have a Questions?</h3>
						<ul>
							<li>
								<i className="fa fa-map"></i>
								SN 341/2, Talegoan, Pune
							</li>
							<li>
								<i className="fa fa-phone-alt"></i>
								02114-239523
							</li>
							<li>
								<i className="fa fa-paper-plane"></i>
								salesinfo@jkpat.in
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className="legal">
				<p>Copyright ©2024 All rights reserved</p>
			</div>
		</>
	);
};

export default Footer;
