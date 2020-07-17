import React, { useEffect, useState, useContext } from "react";
import { Context } from "../Context";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";

const SingleTake = ({ match }) => {
    const { profile, updateProfile } = useContext(Context);
    const [ take, setTake ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const id = match.params.id;
    const history = useHistory();

    const toggleLiked = () => {
        if (profile) {
            !isLoading && updateProfile(profile.likes.includes(take._id) ?
                {
                    likes: profile.likes.filter(like => like !== take._id),
                    extras: { id: take._id, score: -1}
                } :
                {
                    likes: [ ...profile.likes, take._id ],
                    extras: { id: take._id, score: 1}
                }
            );
            setIsLoading(true);
        } else {
            console.log("Please log in to like this take")
            NotificationManager.error("Please log in to like this take");
        }
    };

    const deleteTake = async () => {
        try {
            let response = await fetch(`/api/takes/${id}`, {
                method: "DELETE",
                credentials: "include"
            });
            if (response.ok) {
                console.log((await response.json()).status);
                history.push("/")
            } else {
                throw new Error((await response.json()).status)
            }
        } catch (error) {
            console.log(error)
            NotificationManager.error(error);
        }
    };

    const shareTake = async () => {
        try {
            let response = await fetch(`/api/share/${id}`, {
                method: "POST",
                credentials: "include"
            });
            if (response.ok) {
                const message = (await response.json()).status;
                console.log(message);
                NotificationManager.success(message);
                history.push("/");
            } else {
                throw new Error((await response.json()).status)
            }
        } catch (error) {
            console.log(error)
            NotificationManager.error(error);
        }
    };

    const checkIfValid = () => {
        return profile && take && profile._id === take.user._id;
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
        setIsLoading(false);
    }, [profile])

    return (
        take &&
        <main className="text-center mt-5">
            <h2>{take.title}</h2>
            <p>Written by {take.user.displayName}</p>
            <div>
                {
                checkIfValid() &&
                <button className="btn btn-info" onClick={() => history.push(`/takes/edit/${id}`)}>
                    Edit Take <i className="fas fa-edit ml-1"></i>
                </button>
                }
                <button
                    className={
                        (
                            profile && profile.likes.includes(take._id) ?
                                "text-danger btn-warning " :
                                "btn-primary "
                        ) + "btn mx-2"
                    }
                    onClick={toggleLiked}
                >
                    {take.likes} <i className="fab fa-hotjar"></i>
                </button>
                {
                checkIfValid() &&
                <button className="btn btn-danger" onClick={deleteTake}>
                    Delete Take <i className="fas fa-trash ml-1"></i>
                </button>
                }
            </div>
            {
            take && profile &&
            <div className="my-2">
                <button
                    className="btn"
                    style={{ backgroundColor: "#1DA1F2", borderColor: "#1DA1F2", color: "#fff" }}
                    onClick={shareTake}
                >
                    Share Take <i className="fab fa-twitter ml-1"></i>
                </button>
            </div>
            }
            <hr/>
            <section
                className="container bg-danger my-5 text-white rounded-lg p-4"
                style={{ minHeight: "500px", overflow: "auto" }}
                dangerouslySetInnerHTML={{ __html: take.body }}
            />
        </main>
    );
};

export default SingleTake;
