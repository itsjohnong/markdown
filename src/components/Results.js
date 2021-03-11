import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { editorContext } from './editorContext';

const Results = () => {

    const { markdownText } = useContext(editorContext);

    return (
        <div id="Container">
            <h1 id="Title">Converted Text</h1>
            <div id="preview">
                <ReactMarkdown source={markdownText} />
            </div>
        </div>
    );
};

export default Results;