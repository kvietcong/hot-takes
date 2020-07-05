import React, { useContext } from "react"
import { Context } from "../Context";

const Home = () => {
    const { profile } = useContext(Context);

    return (
        <main className="text-center">
            <h1 className="display-1 mt-5">Welcome to Hot Takes</h1>
            {!profile && <p>Login with Twitter in the navigation</p>}
            <hr/>
            <section className="">
                <h2 className="display-4 mt-3">About the Site</h2>
                <p>
                    Hot Takes is a website where you can post your Hot Takes and share them on
                    Twitter.
                </p>
            </section>
        </main>
    );
};

export default Home;
