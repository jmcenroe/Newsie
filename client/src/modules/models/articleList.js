import React from 'react';
import articles from './articles';

const render =
    (props) =>
        <ul>
            {props.home.map(
                (article) =>
                    <articles
                        article={article}
                        checked={props.checked}
                        savedItem={props.savedItem} />
            )}
        </ul>;

export default render;