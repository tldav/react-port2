import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const App = () => {
	return (
		<Router>
			<Navbar />
			<div className="container my-container">
				<Switch>
					<Route path="/" exact component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
