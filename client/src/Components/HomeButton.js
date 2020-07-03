import React from "react";
import { useHistory } from "react-router-dom";


const HomeButton = () => {
    const history = useHistory();

    return (
        <div
            onClick={() => history.push("/")}
            className="m-3 btn btn-primary position-fixed"
            style={{ width: "10%" }}
        >
                Home
        </div>
    );
};

export default HomeButton;
