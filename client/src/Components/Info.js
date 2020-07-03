import React from "react";

const Info = ({ profile }) => {
    console.log(profile)

    return (
        <main>
            <div className="text-center">
                <h1 className="display-1 mt-2">
                    Hello {profile.displayName}
                </h1>
            </div>
            <section className="text-center">
                <img
                    className="m-3 rounded-circle border border-primary"
                    style={{ width: "100px", height: "100px"}}
                    src={profile.profileImage} alt="Profile Picture" /
                >
                <p className="text-center">"{profile.biography}"</p>
            </section>
        </main>
    );
};

export default Info;
