import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Info from "../Components/Info";

const Profile = () => {
    const [ profile, setProfile ] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response =
                    await fetch("http://localhost:8000/api/users/me", { credentials: "include" })
                if (!response.ok) {
                    throw new Error((await response.json()).status);
                }
                setProfile(await response.json());
            } catch (error) {
                console.error(error);
                return history.push("/");
            }
        }

        getProfile();
    }, []);

    return (
        profile && <Info profile={profile} />
    );
};

export default Profile;
