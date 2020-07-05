import React, { useContext } from "react";
import Info from "../Components/Info";
import { Context } from "../Context";

const Profile = () => {
    const { profile } = useContext(Context);

    return (
        <main>
            {profile ?
            <Info profile={profile} />:
            <h2 className="mt-5 display-2 text-center">You are currently a guest</h2>}
        </main>
    );
};

export default Profile;
