import React from "react";

const Contact = () => {
	return (
		<div>
			<h2 className="title">Contact Me</h2>
			<div className="stage" style={{ paddingTop: "20px" }}>
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Name</label>
						<input
							type="name"
							class="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Email</label>
						<input type="email" class="form-control" />
					</div>

					<div class="form-group">
						<label for="exampleInputPassword1">Message</label>
						<textarea type="text" class="form-control">
							{" "}
						</textarea>
					</div>

					<button
						type="submit"
						class="btn"
						style={{ borderRadius: "0" }}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
