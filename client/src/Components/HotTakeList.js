import React, { useEffect } from "react";
import HotTakeCard from "./HotTakeCard";

const HotTakeList = ({ type }) => {
    useEffect(() => {
        const getTakes = async () => {
            // Something fetch
        };

        getTakes();
    }, [type]);

    return (
        <section className="row row-cols-3 my-5">
            <div className="col">
                <HotTakeCard />
            </div>
            <div className="col">
                <HotTakeCard />
            </div>
            <div className="col">
                <HotTakeCard />
            </div>
            <div className="col">
                <HotTakeCard />
            </div>
            <div className="col">
                <HotTakeCard />
            </div>
        </section>
    );
};

export default HotTakeList;
