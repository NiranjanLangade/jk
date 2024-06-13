import React from "react";
import Hero from "./Hero/Hero";
import Habout from "../about/Habout";
import Test from "./testinomials/Test";
import Hnews from "./Hnews";

const Home = () => {
	return (
		<div>
			<Hero />
			<Habout />
			<Test />
			<Hnews />
		</div>
	);
};

export default Home;
