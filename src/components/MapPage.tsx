import React, {Fragment, useEffect, useRef, useState} from "react";
import styles from "./MapPage.module.css"
import mapbox from "mapbox-gl";
import {Dashboard} from "./Dashboard";
import SearchIcon from "@heroicons/react/outline/SearchIcon";

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

    return <Dashboard>
        <Fragment>
            <div className="flex-1 flex xl:overflow-hidden">
                {/* Primary column */}
                <section
                    aria-labelledby="primary-heading"
                    className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
                >
                    <h1 id="primary-heading" className="sr-only">
                        Account
                    </h1>
                    {/* Your content */}

                    <div className={styles.mapPane} ref={mapContainerRef}/>

                </section>

                {/* Secondary column (hidden on smaller screens) */}
                <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <div className="p-4 h-full relative flex flex-col w-96 border-r border-gray-200 bg-white">
                        {/* Your content */}

                        <p className="mb-6 text-3xl">Map</p>

                        <div className=" relative rounded-md shadow-sm">
                            <div
                                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Find a location"
                            />
                        </div>

                    </div>
                </aside>
            </div>
        </Fragment>

    </Dashboard>

}
