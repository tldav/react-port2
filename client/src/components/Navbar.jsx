import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>Thomas L. Davis</h1>
			<ul>
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
