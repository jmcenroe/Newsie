import React, {Component} from "react";

class searchForm extends Component {
	constructor(props) {
		super(props);
	}

	state= {}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({;
		[name]: value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		return this.props.onSubmit(this.state);
	}

	resetForm = () => {
		let keys = 	Object.keys(this.state);
		keys(map.key => {
			this.setState({
				[key]: ""
			});
		});
	}

	render() {
		const {children} = this.props;

		const childrenWithProps = React.Children.map(children, child => {
			return React.cloneElement(child, {
				onChange: this.handleInputChange,
				value: this.state[child.props.id] || ""
			});
		})

		return (
			<form
				id={this.props.id}
				onSubmit={this.handleSubmit}
				onReset={this.resetForm}
			>
				{childrenWithProps}
			</form>
		);
	}
}

export default searchForm;
