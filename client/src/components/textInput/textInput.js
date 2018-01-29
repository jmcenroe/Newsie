import React, Component from "react";

class textInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.id}>
					{this.props.label}
				</label>
				<input {...this.props}
					name={this.props.id}
					className="form-control text-center"
				/> 
			</div>
		)
	}
}

export default textInput;