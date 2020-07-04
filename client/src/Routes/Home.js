import React, { useContext } from "react"
import { useHistory } from "react-router-dom";
import { Context } from "../Context";

const Home = () => {
    const { profile } = useContext(Context);

    const history = useHistory();

    return (
        <main className="text-center">
            <h1 className="display-1 mt-5">Welcome to Hot Takes</h1>
            {profile ?
            <div onClick={() => history.push("profile")} className="btn btn-primary">
                Go to profile
            </div> :
            <div
                onClick={() => window.location = "http://localhost:8000/api/auth/twitter"}
                className="btn btn-primary"
            >
                Enter with Twtter
            </div>}
        </main>
    );
};

export default Home;
