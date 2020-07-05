import React from "react"
import { Link } from "react-router-dom"

const Home = ({ errorCode, errorMessage }) => {
    return (
        <main className="mt-5 text-center">
            <h1>{errorCode} Error</h1>
            <p>{errorMessage}</p>
            <Link to="/">Go back to Homepage</Link>
        </main>
    );
};

export default Home;
