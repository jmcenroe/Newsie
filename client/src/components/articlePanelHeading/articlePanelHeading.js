import React from "react";

const articlePanelHeading = props => {
	return (
		<div className="panel-heading">
			<h2 className"container-fluid">
				<div className="row">
					<a href={props.url} className="col-xs-8">
					{props.title}
					</a>
					<div className="col-xs-4">
						{props.children}
					</div>
				</div>
			</h2>
		</div>
	)
}

export default articlePanelHeading;