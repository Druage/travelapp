import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {MapPage} from "./components/MapPage";


function App() {
    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/map">
                    <MapPage/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
