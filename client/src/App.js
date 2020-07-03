import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Routes/Error"
import Profile from "./Routes/Profile";
import HomeButton from "./Components/HomeButton";

function App() {
  return (
    <Router>
        <HomeButton />
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
  );
};

export default App;
