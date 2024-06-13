import React, { useState } from "react";
import Back from "../Common/back/Back";
import "./career.css";

const Career = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		resume: null,
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleFileChange = e => {
		setFormData(prevFormData => ({
			...prevFormData,
			resume: e.target.files[0],
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission (e.g., send data to a server)
		console.log(formData);
	};

	return (
		<div>
			<Back title="Career" />
			<div className="career-form-container">
				<h2>Apply Now</h2>
				<form onSubmit={handleSubmit} className="career-form">
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone:</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="resume">Upload Resume:</label>
						<input
							type="file"
							id="resume"
							name="resume"
							onChange={handleFileChange}
							required
						/>
					</div>
					<button type="submit" className="submit-button">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Career;
