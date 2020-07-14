import React, { useContext, useState } from "react";
import Info from "../Components/Info";
import { Context } from "../Context";
import HotTakeList from "../Components/HotTakeList";

const Profile = () => {
    const { profile } = useContext(Context);
    const [ isOnLikes, setIsOnLikes ] = useState(false);

    return (
        <main className="text-center">
            {profile ?
            <Info profile={profile} />:
            <h2 className="mt-5 text-center">You are currently a guest</h2>}
            <hr/>
            <h2 className="mt-5">Your {isOnLikes ? "Likes" : "Takes"}</h2>
            <button className="btn text-info" onClick={ () => setIsOnLikes(!isOnLikes) }>
                <h4 className="m-0">See Your {isOnLikes ? "Takes" : "Likes"}</h4>
            </button>
            <HotTakeList requestURL={`api/takes/me${isOnLikes ? "/likes" : ""}?page=`} />

        </main>
    );
};

export default Profile;
