import React from "react"
import { Link } from "react-router-dom"

const Errors = ({ errorCode = 404, errorMessage = "Content not found", location }) => {
    const queries = new URLSearchParams(location.search);
    errorMessage = queries.get("errorMessage") || errorMessage;
    errorCode = queries.get("errorCode") || errorCode;
    return (
        <main className="mt-5 text-center">
            <h1>{errorCode} Error</h1>
            <p>{errorMessage}</p>
            <Link to="/">Go back to Homepage</Link>
        </main>
    );
};

export default Errors;
