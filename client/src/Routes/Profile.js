import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Info from "../Components/Info";
import { Context } from "../Context";

const Profile = () => {
    const { profile } = useContext(Context);

    return (
        profile ? <Info profile={profile} /> : <Redirect to="/" />
    );
};

export default Profile;
