import React, Component from "react";
import searchForm from "../searchForm";
import textInput from "../textInput";
import button from "../button";

class searchPanel extends Component {
	constructor(props) {
		super(props);
	}

	state = {}

	clearForm = (e) => {
		e.preventDefault();
		document.getElementById("searchForm").reset();
	}

	render() {
		return (
			<div className="panel panel-primary text-center">
				<div className="panel-heading">
					Search
				</div>
				<div className="panel-body">
					<searchForm
						id="searchForm"
						onSubmit={this.props.searchData}
					>
						<textInput
							id="topic"
							label="Topic"
							type="text"
							placeholder="Enter topic"
						/>
						<textInput
							id="startYear"
							label="Start year"
							type="number"
							placeholder="YYYYMMDD"
						/>
						<textInput
							id="endYear"
							label="End year"
							type="number"
							placeholder="YYYYMMDD"
						/>
						<button
							id="submitButton"
							type="submit"
						>
						Submit
						<button>
							<a
								href=""
								style={{marginLeft: "10px"}}
								onClick= {(e) => this.clearForm(e)}
							>
								Clear
							</a>
					</searchForm>
				</div>
			</div>
		);
	}
}

export default searchPanel;
