import React from 'react';

const render =
    (props) =>
        <li>
            <input
                type="checkbox"
                onClick={props.savedItem.bind(null, props.article, !props.checked)}
                checked={props.checked} />
            {props.article}
        </li>;

export default render;