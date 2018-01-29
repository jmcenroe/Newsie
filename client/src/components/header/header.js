import React from "react";

const header = (props) => {
	return (
		<div className="jumbotron text-center">
			<h2>{props.heading}</h2>
			<p>{props.caption}</p>
		</div>
	);
}

export default header;