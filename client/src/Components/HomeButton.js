import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <Link to="/">
            <div className="m-3 btn btn-primary fixed-position">Home</div>
        </Link>
    );
};

export default HomeButton;
