import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Routes/Error"
import Profile from "./Routes/Profile";
import HomeButton from "./Components/HomeButton";
import LogoutButton from "./Components/LogoutButton";
import ContextProvider from "./Context";

function App() {
    return (
        <ContextProvider>
            <Router>
                <HomeButton />
                <LogoutButton />
                <main className="App container">
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
