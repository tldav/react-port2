import React, { Component } from "react";
import yodascope from "../assets/yodascope.PNG";
import plummit from "../assets/plumm-it.PNG";
import fitnessTracker from "../assets/fitness-tracker.PNG";
import charityTracker from "../assets/Capture.PNG";
import projectInfo from "../project-info.json";

class Projects extends Component {
	state = {
		id: projectInfo[0].id,
		name: projectInfo[0].name,
		description: projectInfo[0].description,
		image: yodascope,
		appUrl: projectInfo[0].appUrl,
		repoUrl: projectInfo[0].repoUrl
	};

	onYodaSelect = () => {
		this.setState({
			id: projectInfo[0].id,
			name: projectInfo[0].name,
			description: projectInfo[0].description,
			image: yodascope,
			appUrl: projectInfo[0].appUrl,
			repoUrl: projectInfo[0].repoUrl
		});
	};

	onPlummSelect = () => {
		this.setState({
			id: projectInfo[1].id,
			name: projectInfo[1].name,
			description: projectInfo[1].description,
			image: plummit,
			appUrl: projectInfo[1].appUrl,
			repoUrl: projectInfo[1].repoUrl
		});
	};

	onCharitySelect = () => {
		this.setState({
			id: projectInfo[3].id,
			name: projectInfo[3].name,
			description: projectInfo[3].description,
			image: charityTracker,
			appUrl: projectInfo[3].appUrl,
			repoUrl: projectInfo[3].repoUrl
		});
	};

	render() {
		return (
			<div>
				<h2 className="title">Some of My Work</h2>
				<div className="stage">
					<div className="project-nav mb-4">
						<ul>
							<li>
								<button onClick={this.onYodaSelect}>
									YodaScope
								</button>
							</li>
							<li>
								<button onClick={this.onPlummSelect}>
									plumm.it
								</button>
							</li>
							<li>
								<button onClick={this.onCharitySelect}>
									Charity Tracker
								</button>
							</li>
						</ul>
					</div>
					<div className="row ">
						<div className="col-12">
							<div className="row mb-4 project-name">
								<div className="col-12 d-flex justify-content-center">
									<h1>{this.state.name}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-12 d-flex justify-content-center mb-4">
									<h3 className="description">
										{this.state.description}
									</h3>
								</div>
							</div>
							<div className="row mb-4 d-flex align-items-center">
								<div className="col-8 d-flex">
									<img
										src={this.state.image}
										alt={this.state.name}
										style={{
											maxWidth: "90%",
											height: "auto",
											borderRadius: "20px"
										}}
									/>
								</div>
								<div className="row d-flex justify-content-end">
									<div className="col-4 ">
										<div className="row mb-5">
											<div className="col-12 d-flex">
												<a href={this.state.appUrl}>
													<h3>Application</h3>
												</a>
											</div>
										</div>
										<div className="row">
											<div className="col-12 d-flex">
												<a href={this.state.repoUrl}>
													<h3>Repository</h3>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
