import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Matches from "./Matches";
import Home from "./Home";
import News from "./News";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style.css"


const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact  path = "/" component = {Home} />
            <Route exact path = "/match" component = {Matches} />
            <Route exact path = "/news" component = {News} />
            <Redirect to = "/" />
        </Switch>
    

        </>
    )
}



export default App;