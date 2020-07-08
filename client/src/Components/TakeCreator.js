import React, { useState } from "react"
import RichTextEditor from 'react-rte';

const TakeCreator = () => {
    const [ editorState, setEditorState ] = useState(RichTextEditor.createEmptyValue());

    console.log(editorState.toString("html"))
    return (
        <main className="text-center mt-5">
            <h1>Create a take</h1>
            <RichTextEditor
                value={editorState}
                onChange={(editorState) => setEditorState(editorState)}
            />
        </main>
    );
};

export default TakeCreator;
