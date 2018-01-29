import React, {Component} from "react";

class button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button 
				id={this.props.id}
				type={this.props.type}
				className="btn btn-primary"
			>
				{this.props.children}
			</button>
		)
	}
}

export default button;