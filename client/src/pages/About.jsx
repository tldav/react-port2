import React from "react";
import me from "../assets/me.jpg";

const About = () => {
	return (
		<div>
			<h2 className="title">About</h2>
			<div className="stage" style={{ paddingTop: "20px" }}>
				<img
					src={me}
					alt="Thomas Davis"
					style={{ float: "left", padding: "10px" }}
				/>

				<p style={{ marginBottom: "30px", marginTop: "10px" }}>
					Software Developer with a background in insurance fraud
					analysis and special investigations. With a recently earned
					certificate in Full Stack Development from Southern
					Methodist University, my ambition is to construct
					captivating applications that focus on the user first.
					Ardent love for aesthetic design and a penchant for abstract
					problem-solving inspire perpetual elevation of my
					proficiency as a developer. Created full stack applications
					with several technologies, including JavaScript, CSS, React,
					Node, Express, MySQL, MongoDB, and more. Excited to continue
					to learn and grow in a professional environment.
				</p>
			</div>
		</div>
	);
};

export default About;
