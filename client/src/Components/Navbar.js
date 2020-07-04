import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../Context";

const Navbar = () => {
    const { profile, setProfile } = useContext(Context);
    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-danger">
            <h1 className="navbar-brand mb-0">
                Hot Takes
            </h1>
            <button
                class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarMain" aria-controls="navbarMain"
                aria-expanded="false" aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMain">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link" to="/">Home</Link>
                    <Link class="nav-item nav-link" to="/profile">Profile</Link>
                </div>
                <div class="navbar-nav ml-auto">
                    {profile ?
                    <div
                        onClick={async () => {
                            setProfile(null);
                            await fetch("http://localhost:8000/api/auth/logout",
                                { credentials: "include" });
                            history.push("/");
                        }}
                        className="nav-item btn btn-warning"
                    >
                        Logout
                    </div> :
                    <div
                        onClick={ () => window.location = "http://localhost:8000/api/auth/twitter" }
                        className="nav-item btn btn-warning"
                    >
                        Login
                    </div>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
