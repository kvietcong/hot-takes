import React, { useEffect, useState, useContext } from "react";
import { Context } from "../Context";

const SingleTake = ({ match }) => {
    const { profile, updateProfile } = useContext(Context);
    const [ take, setTake ] = useState(null);

    const id = match.params.id;

    const toggleLiked = () => {
        updateProfile(profile.likes.includes(take._id) ?
            { likes: profile.likes.filter(like => like !== take._id) } :
            { likes: [ ...profile.likes, take._id ]});
    }

    useEffect(() => {
        const getTake = async () => {
            try {
                let response = await fetch(`http://localhost:8000/api/takes/${id}`);
                if (response.ok) {
                    response = (await response.json()).take;
                    setTake(response);
                } else {
                    throw new Error((await response.json()).status)
                }
            } catch (error) {
                console.error(error);
            }
        }
        getTake();
    }, [id, profile]);

    return (
        take &&
        <main className="text-center mt-5">
            <h2>{take.title}</h2>
            <p>Written by {take.user.displayName}</p>
            <div className="">
                <span
                    className={profile && profile.likes.includes(take._id) ? "text-danger" : ""}
                    onClick={toggleLiked}
                >
                    {take.likes} <i className="fab fa-hotjar mr-2"></i>
                </span>
            </div>
            <hr/>
            <section
                className="container bg-danger my-5 text-white rounded-lg p-4"
                style={{ minHeight: "500px" }}
                dangerouslySetInnerHTML={{ __html: take.body }}
            />
        </main>
    );
};

export default SingleTake;
