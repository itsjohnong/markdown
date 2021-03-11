import React, { useContext, useState } from 'react';
import { editorContext } from './editorContext';

const MarkedInput = () => {
    const { setMarkdownText } = useContext(editorContext);

    const onInputChange = e => {
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue);
    };
    
    return (
        <div id="Container">
            <h1 id="Title">Text Area</h1>
            <textarea id="editor" className="editor" onChange={onInputChange} />
        </div>
    );
};

export default MarkedInput;