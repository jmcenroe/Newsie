import React from "react";

const articlePanelBody = props => {
	return 
		<div className="panel-body">
			<h3>
				{props.title}
			</h3>
			<p className="text-right">
				<time>
					{"Published on: " props.date.substring(0, 10)}
				</time>
			</p>
		</div>
	)
}

export default articlePanelBody;