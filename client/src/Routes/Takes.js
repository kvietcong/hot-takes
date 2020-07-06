import React from "react";
import HotTakeList from "../Components/HotTakeList";

const Takes = ({ location }) => {
    const ACCEPTED_TYPES = ["all", "latest", "hot"];
    const queries = new URLSearchParams(location.search);
    const type = ACCEPTED_TYPES.includes(queries.get("type")) ?
        queries.get("type") : "all";

    return (
        <main className="text-center">
            <h1 className="display-1 mt-5">
                {type.charAt(0).toUpperCase() + type.slice(1)} Takes
            </h1>
            <hr/>
            <HotTakeList requestURL={`api/takes?type=${type}&page=`} />
        </main>
    );
};

export default Takes;
