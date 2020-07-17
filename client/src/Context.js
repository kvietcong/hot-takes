import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [profile, setProfile] = useState(null);

    const updateProfile = async (information) => {
        try {
            const response =
                await fetch("/api/users/me", {
                    method: "PUT",
                    credentials: "include",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(information)
                });
            if (!response.ok) {
                console.log("Error in setting account")
            } else {
                setProfile((await response.json()).user);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response =
                    await fetch("/api/users/me", { credentials: "include" });
                if (!response.ok) {
                    console.log("Could not find an existing account session")
                } else {
                    setProfile(await response.json());
                }
            } catch (error) {
                console.log(error)
            }
        }

        getProfile();
    }, []);

    return (
        <Context.Provider value={{ profile, setProfile, updateProfile }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;