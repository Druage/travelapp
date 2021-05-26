import React, {useEffect} from "react";
import styles from "./MapPage.module.css"
import {GeolocateControl, Map, NavigationControl} from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export function MapPage() {

    let map: any;
    let geocoder: MapboxGeocoder
    const accessToken = 'pk.eyJ1IjoibGVlbGF6YXJlY2t5IiwiYSI6ImNrbzI1eGhrNDA4Mmsyb29lYTgyZjR0bHkifQ.EQiqikkIYHnvWHKGzPSNCQ';

    useEffect(() => {
        map = new Map({
            container: 'map-pane',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            accessToken: accessToken
        });

        map.addControl(new GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        map.addControl(new NavigationControl(), 'top-right');

        geocoder = new MapboxGeocoder({
            accessToken: accessToken,
            mapboxgl: map
        });

        document.getElementById('geocoder')!.appendChild(geocoder.onAdd(map))

    });

    return <div className={styles.mapContainer}>
        <div className={styles.leftPane}>
            <div id="geocoder"/>
        </div>

        <div className={styles.rightPane}>
            <div id="map-pane" className={styles.mapPane}/>
            <button className={styles.addStopButton}>Add A Stop +</button>
        </div>


    </div>
}
