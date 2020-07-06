import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SingleTake from "../Components/SingleTake";
import Errors from "./Errors";

const TakeAction = ({ match }) => {
    return (
        <Switch>
            <Route path="/takes/view/:id" component={SingleTake} />
            <Route component={Errors} />
        </Switch>
    );
};

export default TakeAction;
