import React, { useEffect, useState, useContext } from "react";
import { Context } from "../Context";

const SingleTake = ({ match }) => {
    const [ take, setTake ] = useState(null);
    const { profile } = useContext(Context);

    const id = match.params.id;

    useEffect(() => {
        const getTake = async () => {
            try {
                let response = await fetch(`http://localhost:8000/api/takes/${id}`);
                if (response.ok) {
                    setTake((await response.json()).take);
                } else {
                    throw new Error((await response.json()).status)
                }
            } catch (error) {
                console.error(error);
            }
        }
        getTake();
    }, [id]);

    return (
        take &&
        <main className="text-center mt-5">
            <h2>{take.title}</h2>
            <p>Written by {take.user.displayName}</p>
            <p>{profile && profile._id}</p>
            <hr/>
            <section
                className="container bg-danger my-5 text-white rounded-lg p-4"
                style={{ minHeight: "500px" }}
            >
                {take.body}
            </section>
        </main>
    );
};

export default SingleTake;
