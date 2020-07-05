import React from "react";
import HotTakeList from "../Components/HotTakeList";

const Takes = ({ match }) => {
    const takeType = match.params.type;

    return (
        <main className="text-center">
            <h1 className="display-1 mt-5">
                {takeType.charAt(0).toUpperCase() + takeType.slice(1)} Takes
            </h1>
            <hr/>
            <HotTakeList type={takeType} />
        </main>
    );
};

export default Takes;
