import React, { Component } from "react";
import yodascope from "../assets/yodascope.PNG";
import plummit from "../assets/plumm-it.PNG";
import fitnessTracker from "../assets/fitness-tracker.PNG";
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

	onFitnessSelect = () => {
		this.setState({
			id: projectInfo[2].id,
			name: projectInfo[2].name,
			description: projectInfo[2].description,
			image: fitnessTracker,
			appUrl: projectInfo[2].appUrl,
			repoUrl: projectInfo[2].repoUrl
		});
	};

	render() {
		return (
			<div>
				<h2 className="title">My Work</h2>
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
								<button onClick={this.onFitnessSelect}>
									Fitness Tracker
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
