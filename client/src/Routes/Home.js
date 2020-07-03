import React from "react"
import { useHistory } from "react-router-dom";

const Home = () => {
    const handleClick = async () => {
        console.log("hi")
        window.location = "http://localhost:8000/api/auth/twitter";
    };

    return (
        <>
            <h1>Welcome to Hot Takes</h1>
            <div onClick={handleClick} className="btn btn-primary">Enter with Twitter</div>
            <div onClick={() => window.location = "http://localhost:8000/test"} className="btn btn-primary">Testr</div>
            <div
                onClick={async () => {
                    console.log(await (await fetch("http://localhost:8000/api/users/me", {credentials: "include"})).json())
                }}
                className="btn btn-primary">Print User
            </div>
        </>
    );
};

export default Home;
