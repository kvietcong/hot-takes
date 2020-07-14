import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Takes from "./Routes/Takes";
import Errors from "./Routes/Errors"
import Profile from "./Routes/Profile";
import ContextProvider from "./Context";
import Navbar from "./Components/Navbar";
import TakeAction from "./Routes/TakeAction";
import { NotificationContainer } from "react-notifications";
import "./App.css"
import "react-notifications/lib/notifications.css";

function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/takes" component={Takes} />
                        <Route path="/takes/:action" component={TakeAction} />
                        <Route component={Errors} />
                    </Switch>
                </main>
            </Router>
            <NotificationContainer/>
        </ContextProvider>
    );
};

export default App;
