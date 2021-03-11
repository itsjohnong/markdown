import React, { useState } from 'react';
import './App.css';
import MarkedInput from './MarkedInput';
import Results from './Results';
import { editorContext } from './editorContext';

export default () => {

    const [markdownText, setMarkdownText] = useState("");

    const contextValue = {
        markdownText,
        setMarkdownText
    };

    return (
        <editorContext.Provider value={contextValue}>
            <div id="AppContainer">
                <div id="Title">Markdown Editor</div>
                <div id="EditorContainer">
                    <MarkedInput />
                    <Results />
                </div> 
            </div>
        </editorContext.Provider>
    );
};
