import React from "react";
import "./App.css";
import Header from "./Componenets/Common/Heading/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Componenets/Home/Home";
import About from "./Componenets/about/About";
import Team from "./Componenets/Team/Team";
import News from "./Componenets/News/News";
import Contact from "./Componenets/contact/Contact";
import Footer from "./Componenets/Common/Footer/Footer";
import Design from "./Componenets/Design/Design";
import Quality from "./Componenets/Quality/Quality";
import Manufac from "./Componenets/Manufacturing/Manufac";
import Career from "./Componenets/Career/Career";
import Certificate from "./Componenets/Quality/Certification/Certificate.jsx";
import Software from "./Componenets/Manufacturing/Software/Software.jsx";
import Machine from "./Componenets/Manufacturing/Machine/Machine.jsx"
import Instruments from "./Componenets/Quality/Instruments/Instruments.jsx";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/organisation" exact component={About} />
					<Route path="/team" exact component={Team} />
					<Route path="/news" exact component={News} />
					<Route path="/ContactUs" exact component={Contact} />
					<Route path="/Design" exact component={Design} />
					<Route path="/Quality" exact component={Quality} />
					<Route path="/Quality/Certification" exact component={Certificate} />
					<Route path="/Quality/Instruments" exact component={Instruments} />
					<Route path="/Manufacturing" exact component={Manufac} />
					<Route path="/Manufacturing/Software" exact component={Software} />
					<Route path="/Manufacturing/Machine" exact component={Machine} />
					<Route path="/Careers" exact component={Career} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
}

export default App;
