import React from "react";

const Info = ({ profile }) => {
    console.log(profile)

    return (
        <section>
            <section className="text-center">
                <h1 className="display-1 mb-2">
                    Hello {profile.displayName}
                </h1>
            </section>
            <section className="text-center">
                <img
                    className="m-3 rounded-circle border border-primary"
                    style={{ width: "100px", height: "100px"}}
                    src={profile.profileImage} alt={profile.displayName}
                />
                <p className="text-center">"{profile.biography}"</p>
            </section>
        </section>
    );
};

export default Info;
