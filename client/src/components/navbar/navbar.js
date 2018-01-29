import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class navbar extends Component (
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="./">
						New York Times Article Finder
						</a>
					</div>
					<ul className="nav navbar-nav">
						<li className={this.props.location.pathname === "/" 
						? "active" 
						: ""}>
						</li>
						<li className={this.props.location.pathname === "/saved"
						? "active"
						: ""}>
							<a href="saved">Saved Articles</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
)

export default withoutRouter(navbar);