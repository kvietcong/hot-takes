import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Routes/Error"
import Profile from "./Routes/Profile";
import ContextProvider from "./Context";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <main className="container-md">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/error">
                            <Error />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </ContextProvider>
    );
};

export default App;
