import React from "react";
import "./Footer.css";
import resume from "../assets/tdavis-developer-resume.pdf";

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/tldav/">Linkedin</a>
				</li>
				<li>
					<a href="https://github.com/tldav">Github</a>
				</li>
				<li>
					<a href={resume}>Resume</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
