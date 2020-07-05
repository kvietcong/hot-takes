import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Routes/Error"
import Profile from "./Routes/Profile";
import ContextProvider from "./Context";
import Navbar from "./Components/Navbar";
import Takes from "./Routes/Takes";

function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <main className="container-md">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route path="/takes/:type" component={Takes} />
                        <Route component={Error} />
                    </Switch>
                </main>
            </Router>
        </ContextProvider>
    );
};

export default App;
