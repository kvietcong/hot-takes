import React, { useContext } from "react";
import Info from "../Components/Info";
import { Context } from "../Context";
import HotTakeList from "../Components/HotTakeList";

const Profile = () => {
    const { profile } = useContext(Context);

    return (
        <main className="text-center">
            {profile ?
            <Info profile={profile} />:
            <h2 className="mt-5 text-center">You are currently a guest</h2>}
            <hr/>
            <h2 className="mt-5">Your Takes</h2>
            <HotTakeList requestURL="api/takes/me?page=" />
        </main>
    );
};

export default Profile;
