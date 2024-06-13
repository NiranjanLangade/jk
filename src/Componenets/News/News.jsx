import React from "react";
import NewsCard from "./NewsCard";
import Back from "../Common/back/Back";
import "./News.css";
const News = () => {
	return (
		<div>
			<Back title="News & Events" />
			<section className="news padding">
				<div className="container grid2">
					<NewsCard />
				</div>
			</section>
		</div>
	);
};

export default News;
