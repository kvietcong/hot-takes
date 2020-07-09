import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TakeCreator = () => {
    const [ tags, setTags ] = useState("");
    const [ body, setBody ] = useState("");
    const [ title, setTitle ] = useState("");

    const sumbitTake = async (submission) => {
        submission.preventDefault();
        parseTags();
    }

    const parseTags = () => {

    }

    return (
        <main className="text-center mt-5">
            <h1>Create a take</h1>
            <hr/>
            <form onSubmit={sumbitTake} className="my-4" autoComplete="off">
                <div className="form-group">
                    <h3>
                        <label htmlFor="title">Title</label>
                    </h3>
                    <input
                        id="title" type="text"
                        className="text-center form-control"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <h3>Your take</h3>
                    <ReactQuill theme="snow" value={body} onChange={setBody}/>
                </div>
                <div className="form-group">
                    <h3>
                        <label htmlFor="tags">Tags</label>
                    </h3>
                    <p>Seperate with Hashes (#)</p>
                    <input
                        id="tags" type="text"
                        className="text-center form-control"
                        value={tags}
                        onChange={event => setTags(event.target.value)}
                    />
                </div>
                <input type="submit" value="Create Take" className="form-control"/>
            </form>
        </main>
    );
};

export default TakeCreator;
