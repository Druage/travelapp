import React, {useEffect, useRef, useState} from "react";
import styles from "./MapPage.module.css"
import mapbox from "mapbox-gl";

export function MapPage() {

    const mapContainerRef = useRef(null);
    const [mapInstance, setMapInstance] = useState<mapbox.Map>();

    const accessToken = 'pk.eyJ1IjoibGVlbGF6YXJlY2t5IiwiYSI6ImNrbzI1eGhrNDA4Mmsyb29lYTgyZjR0bHkifQ.EQiqikkIYHnvWHKGzPSNCQ';

    useEffect(() => {
        // if ( map ) return;
        // if ( geocoder ) return;
        //

        let map = new mapbox.Map({
            container: mapContainerRef.current!,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            accessToken: accessToken,
        });

        map.on('load', () => {

            map.addControl(new mapbox.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            }));

            map.addControl(new mapbox.NavigationControl(), 'top-right');
            //
            // console.log(tempMap);
            //
            // setMap(tempMap)
            //

            setMapInstance(map);
        })


    }, []);

    return <div className={styles.mapContainer}>
        <div className={styles.leftPane}>
            <div id="geocoder"/>
        </div>

        <div className={styles.rightPane}>
            <div className={styles.mapPane} ref={mapContainerRef}/>
        </div>

    </div>
}
