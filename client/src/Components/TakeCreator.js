import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Context } from "../Context";
import { useHistory } from "react-router-dom";

const TakeCreator = () => {
    const [ tags, setTags ] = useState("#");
    const [ body, setBody ] = useState("");
    const [ title, setTitle ] = useState("");
    const { profile } = useContext(Context);

    const history = useHistory();

    const sumbitTake = async (submission) => {
        submission.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/takes", {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    categories: parseTags(),
                    user: profile._id
                })
            });
            if (response.ok) {
                console.log("Successfully added take!");
                console.log((await response.json()).take);
                history.push("/takes?type=latest");
            } else {
                throw new Error(await (response.json()).status)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const parseTags = () => {
        return tags
            .split(/\s*#\s*/)
            .splice(1)
            .filter(tag => tag !== "")
            .map(tag => tag.trim().split(/\s*/).join(""));
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
                        value={title} maxLength="100"
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <h3>Your take</h3>
                    <ReactQuill
                        placeholder="Type your take here" theme="snow"
                        value={body} onChange={setBody}
                    />
                </div>
                <div className="form-group">
                    <h3>
                        <label htmlFor="tags">Tags</label>
                    </h3>
                    <p>Denote with Hashes (#)</p>
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
