import React from "react";

const removeButton = props => {
	return (
		<a 
			href={""}
			onClick={e, => props.onClick(e, props.articleId)}
			className="btn btn-danger saveButton"
		>
			{props.children}
		</a>
	)
}

export default removeButton;