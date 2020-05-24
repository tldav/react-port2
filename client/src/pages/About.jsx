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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nulla ipsam minus, laborum provident, quo possimus ullam vel
					error nemo fugiat aliquam ut ducimus praesentium laudantium
					voluptates eius ab mollitia et. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Id, quisquam sequi distinctio
					ex quaerat voluptate cumque nam repudiandae, doloribus
					perspiciatis atque minima possimus maxime ut voluptatibus
					repellendus delectus debitis dicta? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Suscipit dignissimos
					sapiente ex itaque deserunt ut exercitationem, laborum rem.
					Consequatur eaque sit velit explicabo officia rerum aliquid
					sint vel exercitationem quisquam! Lorem ipsum dolor, sit
					amet consectetur adipisicing elit. Molestias dignissimos
					ducimus quas velit ipsa praesentium quo non, nostrum ab
					natus doloribus et, fuga debitis enim? Culpa harum ad odio.
					Voluptatibus. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nihil vel enim inventore laborum dicta ut
					ex illo assumenda ratione veniam, voluptatibus quos quae.
					Fugit alias repellat modi facilis, ullam sapiente! Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Nobis
					illum officiis neque, eveniet adipisci natus soluta illo.
					Repudiandae sunt, expedita architecto quas ea assumenda
					delectus ad in aut, nobis similique!
				</p>
			</div>
		</div>
	);
};

export default About;
