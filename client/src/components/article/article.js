import React from "react";

const article = props => {
	return (
		<div className="row">
			<div className="panel panel-default">
				{props.children} 
			</div>
		</div>
	);
}

export default article;
