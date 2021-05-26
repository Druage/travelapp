import React, {useEffect} from "react";
import styles from "./MapPage.module.css"

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibGVlbGF6YXJlY2t5IiwiYSI6ImNrbzI1eGhrNDA4Mmsyb29lYTgyZjR0bHkifQ.EQiqikkIYHnvWHKGzPSNCQ';

export function MapPage() {

    let map: any;

    useEffect(() => {
        map = new mapboxgl.Map({
            container: 'map-pane',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            displayControlsDefault: false,
        });

        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    });

    return <div className={styles.mapContainer}>
        <div className={styles.leftPane}>
            <input className={styles.mapSearch} type="text" placeholder="Search..."/>
        </div>

        <div className={styles.rightPane}>
            <div id="map-pane" className={styles.mapPane}/>
            <button className={styles.addStopButton}>Add A Stop +</button>
        </div>


    </div>
}
