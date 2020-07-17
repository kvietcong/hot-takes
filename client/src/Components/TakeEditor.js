import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";
import ReactQuill from "react-quill";
import { NotificationManager } from "react-notifications";

const TakeEditor = ({ match }) => {
    const [ tags, setTags ] = useState("#");
    const [ body, setBody ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ take, setTake ] = useState(null);
    const { profile } = useContext(Context);

    const id = match.params.id;
    const history = useHistory();

    const editTake = async (submission) => {
        submission.preventDefault();
        try {
            const response = await fetch(`/api/takes/${id}`, {
                method: "PUT",
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
                console.log("Successfully edited take!");
                NotificationManager.success("Successfully edited take!");
                console.log((await response.json()).take);
                history.push("/takes?type=latest");
            } else {
                throw new Error(await (response.json()).status)
            }
        } catch (error) {
            console.log(error)
            NotificationManager.error(error);
        }
    };

    const parseTags = () => {
        return tags
            .split(/\s*#\s*/)
            .splice(1)
            .filter(tag => tag !== "")
            .map(tag => tag.trim().split(/\s*/).join(""));
    };

    useEffect(() => {
        const getTake = async () => {
            try {
                let response = await fetch(`/api/takes/${id}`);
                if (response.ok) {
                    response = (await response.json()).take;
                    setTake(response);
                } else {
                    throw new Error((await response.json()).status)
                }
            } catch (error) {
                console.log(error)
                NotificationManager.error(error);
            }
        }
        getTake();
    }, [id, profile]);

    useEffect(() => {
        if (take) {
            setBody(take.body);
            setTitle(take.title);
            setTags("#" + take.categories.join(" #"));
        }
    }, [take]);

    useEffect(() => {
        !profile && history.push("/error?errorMessage=Unauthorized&errorCode=403");
    }, [history, profile]);

    return (
        <main className="text-center">
            <h1>Edit Take</h1>
            <hr/>
            {take ?
            <form onSubmit={editTake} className="my-4" autoComplete="off">
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
                <input type="submit" value="Edit Take" className="form-control"/>
            </form> :
            <h3>Loading...</h3>}
        </main>
    );
};

export default TakeEditor;
