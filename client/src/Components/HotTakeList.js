import React, { useEffect, useState } from "react";
import HotTakeCard from "./HotTakeCard";

const HotTakeList = ({ type }) => {
    const [ takes, setTakes ] = useState([]);

    useEffect(() => {
        const getTakes = async () => {
            try {
                let response = await fetch("http://localhost:8000/api/takes/");
                if (response.ok) {
                    setTakes((await response.json()).takes);
                } else {
                    throw new Error((await response.json()).status);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getTakes();
    }, [type]);

    return (
        <section className="row row-cols-3 my-5">
            {takes.map(take =>
            <div key={take._id} className="col">
                <HotTakeCard take={take}  />
            </div>)}
        </section>
    );
};

export default HotTakeList;
