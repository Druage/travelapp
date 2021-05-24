import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibGVlbGF6YXJlY2t5IiwiYSI6ImNrbzI1eGhrNDA4Mmsyb29lYTgyZjR0bHkifQ.EQiqikkIYHnvWHKGzPSNCQ';
const map = new mapboxgl.Map({
    container: 'map-pane',
    style: 'mapbox://styles/mapbox/streets-v11',
});

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
