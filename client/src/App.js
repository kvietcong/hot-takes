import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Routes/Error"
import Test from "./Routes/Test";

function App() {
  return (
    <Router>
        <main className="App">
            <h1>Hot Takes</h1>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/test">
                    <Test />
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
