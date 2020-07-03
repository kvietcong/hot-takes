import React from "react"
import { Redirect, useHistory } from "react-router-dom";

const Home = () => {
    const handleClick = async () => {
        window.location = "http://localhost:8000/api/auth/twitter";
    };

    const history = useHistory();

    return (
        <main className="text-center">
            <h1 className="display-1">Welcome to Hot Takes</h1>
            <div onClick={handleClick} className="btn btn-primary">Enter with Twitter</div>
            <div onClick={() => history.push("profile")} className="btn btn-primary">Go to profile</div>
            <div
                onClick={async () =>
                    console.log(await
                        (await fetch("http://localhost:8000/api/users/me", { credentials: "include" }))
                        .json()
                    )
                }
                className="btn btn-primary"
            >
                Print User
            </div>
            <div
                onClick={async () => {
                    console.log(
                        await
                        (await fetch("http://localhost:8000/api/auth/logout", { credentials: "include" }))
                        .json()
                    )
                }}
                className="btn btn-primary"
            >
                Logout
            </div>
        </main>
    );
};

export default Home;
