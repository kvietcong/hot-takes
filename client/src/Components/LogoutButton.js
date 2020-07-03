import React, { useContext } from "react";
import { Context } from "../Context";


const LogoutButton = () => {
    const { profile, setProfile } = useContext(Context);

    return (
        profile ?
        <div
            onClick={async () => {
                setProfile(null);
                await fetch("http://localhost:8000/api/auth/logout",
                    { credentials: "include" });
                window.location = "/";
            }}
            className="m-3 btn btn-primary position-fixed"
            style={{ right: 0, width: "10%" }}
        >
                Logout
        </div> :
        null
    );
};

export default LogoutButton;
