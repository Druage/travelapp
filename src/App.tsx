import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {MapPage} from "./components/MapPage";
import {Dashboard} from "./components/Dashboard";
import {FinancePage} from "./components/FinancePage";
import {SignInPage} from "./components/pages/SignInPage";

function App() {
    return (

        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/sign_in" component={SignInPage}/>
                <Route exact path="/dashboard" component={Dashboard}>
                    <Redirect to="/dashboard/map"/>
                </Route>
                <Route exact path="/dashboard/map" component={MapPage}/>
                <Route exact path="/dashboard/finance" component={FinancePage}/>
            </Switch>
        </Router>

    );
}

export default App;
