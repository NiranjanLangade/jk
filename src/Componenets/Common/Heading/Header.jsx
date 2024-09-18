import React, { useState } from "react";
import Head from "./Head";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	const [click, setClick] = useState(false);
	const [designDropdown, setDesignDropdown] = useState(false);
	const [manufacturingDropdown, setManufacturingDropdown] = useState(false);

	return (
		<div>
			<Head />
			<header>
				<nav className={click ? "mobile-nav" : "flexSB"}>
					<ul className="flexSB" onClick={() => setClick(false)}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Organisation">Organisation</Link>
						</li>
						<li>
							<Link to="/Design">Design</Link>
						</li>
						<li
							onMouseEnter={() => setManufacturingDropdown(true)}
							onMouseLeave={() => setManufacturingDropdown(false)}
						>
							<Link to="/Manufacturing">Manufacturing</Link>
							{manufacturingDropdown && (
								<ul className="dropdown">
									<li>
										<Link to="/Manufacturing/Software">Software</Link>
									</li>
									<li>
										<Link to="/Manufacturing/Machine">Machine</Link>
									</li>
								</ul>
							)}
						</li>
						<li
							onMouseEnter={() => setDesignDropdown(true)}
							onMouseLeave={() => setDesignDropdown(false)}
						>
							<Link to="/Quality">Quality</Link>
							{designDropdown && (
								<ul className="dropdown">
									<li>
										<Link to="/Quality/Certification">Certifications</Link>
									</li>
									<li>
										<Link to="/Quality/Instruments">Instruments</Link>
									</li>
								</ul>
							)}
						</li>
						<li>
							<Link to="/Careers">Careers</Link>
						</li>
						<li>
							<Link to="/ContactUs">Contact Us</Link>
						</li>
					</ul>

					<div className="start">
						<a
							href="/E-Brochure.pdf"
							download="E-Brochure.pdf"
							className="button"
						>
							<i className="fa-solid fa-arrow-down download"></i> E-Brochure
						</a>
					</div>

					<button className="toggle" onClick={() => setClick(!click)}>
						{click ? (
							<i className="fa fa-times"></i>
						) : (
							<i className="fa fa-bars"></i>
						)}
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Header;
