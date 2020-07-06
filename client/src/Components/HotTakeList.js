import React, { useState, useEffect } from "react";
import HotTakeCard from "./HotTakeCard";
import { useHistory } from "react-router-dom";

const HotTakeList = ({ requestURL }) => {
    const [ takes, setTakes ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ isLoading, setIsLoading ] = useState(true);

    const history = useHistory();

    useEffect(() => {
        const getTakes = async () => {
            try {
                setIsLoading(true);
                let response =
                    await fetch("http://localhost:8000/" + requestURL + page,
                        { credentials: "include"});
                if (response.ok) {
                    setTakes((await response.json()).takes);
                    setIsLoading(false);
                } else {
                    throw new Error((await response.json()).status);
                }
            } catch (error) {
                console.error(error);
                history.push(`/error?errorMessage=${error.message}&errorCode= `);
            }
        };

        getTakes();
    }, [page, history, requestURL]);

    return (
        <section className="mb-5">
            <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5">
                {takes.map(take =>
                <div key={take._id} className="col">
                    <HotTakeCard take={take}  />
                </div>)}
            </section>
            <div>
                {!isLoading && (page > 1) ?
                <button
                    onClick={() => setPage(page - 1)}
                    className="btn btn-danger"
                >
                    Previous Page
                </button>
                : null}
                <span className="font-weight-bold mx-3">Page {page}</span>
                {!isLoading && (takes.length >= 12) ?
                <button
                    onClick={() => setPage(page + 1)}
                    className="btn btn-danger"
                >
                    Next Page
                </button>
                : null}
            </div>
        </section>
    );
};

export default HotTakeList;
