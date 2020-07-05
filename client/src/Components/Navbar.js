import React, { useContext } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { Context } from "../Context";

const Navbar = ({ selected }) => {
    const { profile, setProfile } = useContext(Context);
    const history = useHistory();

    const logout = async () => {
        setProfile(null);
        await fetch("http://localhost:8000/api/auth/logout",
            { credentials: "include" });
        history.push("/")
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-danger">
            <h1 className="navbar-brand mb-0">
                Hot Takes
            </h1>
            <button
                className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarMain" aria-controls="navbarMain"
                aria-expanded="false" aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav">
                    <li>
                        <NavLink
                            className="nav-item nav-link"
                            activeClassName="active" to="/" exact
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={`nav-item nav-link ${!profile && "disabled"}`}
                            activeClassName="active" to="/profile"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink
                            className="nav-link dropdown-toggle"
                            id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"
                            to="/takes" activeClassName="active"
                        >
                            Takes
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/takes/all">All</Link>
                            <Link className="dropdown-item" to="/takes/latest">Latest</Link>
                            <Link className="dropdown-item" to="/takes/hot">Hot</Link>
                            <Link className="dropdown-item" to="/takes/best">Best</Link>
                            <Link className="dropdown-item" to="/takes/worst">Worst</Link>
                        </div>
                    </li>
                </ul>
                <div className="navbar-nav ml-auto">
                    {profile ?
                    <div onClick={logout} className="nav-item btn btn-warning">
                        Logout
                    </div>
                    :
                    <div
                        onClick={ () =>
                            window.location = "http://localhost:8000/api/auth/twitter"
                        }
                        className="nav-item btn btn-warning"
                    >
                        Login/Register with Twitter
                    </div>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
