import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Errors from "./Routes/Errors"
import Profile from "./Routes/Profile";
import ContextProvider from "./Context";
import Navbar from "./Components/Navbar";
import Takes from "./Routes/Takes";
import TakeAction from "./Routes/TakeAction";
import "./App.css"

function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <main className="container-md">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/takes" component={Takes} />
                        <Route path="/takes/:action" component={TakeAction} />
                        <Route component={Errors} />
                    </Switch>
                </main>
            </Router>
        </ContextProvider>
    );
};

export default App;
