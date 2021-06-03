import {Link} from "react-router-dom";
import React from "react";

import styles from "./HomePage.module.css"

export function HomePage() {
    return <div className="App">

        <div className={styles.container}>
            <h1>Welcome to Travel App!</h1>
            <h3>My Trips</h3>

            <Link to="/dashboard">
                <button className={styles.addTripButton}>Add Trip</button>
            </Link>
        </div>

    </div>
}
