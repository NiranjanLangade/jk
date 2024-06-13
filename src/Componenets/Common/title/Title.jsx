import React from "react";

const Title = ({ Subtitle, title }) => {
	return (
		<div>
			<div id="heading">
				<h3>{Subtitle}</h3>
				<h1>{title}</h1>
			</div>
		</div>
	);
};

export default Title;
