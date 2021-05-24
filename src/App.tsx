import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
    return (

        <Router>
            <Switch>
                <Route exact path="/">

                    <div className="App">

                        <div className="container">
                            <h1>Welcome to Travel App!</h1>
                            <h3>My Trips</h3>

                            <Link to="/map">
                                <button className="add-trip-button">Add Trip</button>
                            </Link>
                        </div>

                    </div>
                </Route>

                <Route exact path="/map">

                    <div className="map-container">
                        <div className="left-pane">
                            <input className="map-search" type="text" placeholder="Search..."/>
                        </div>
                        <div id="map-pane"></div>
                    </div>

                </Route>

            </Switch>
        </Router>

    );
}

export default App;
