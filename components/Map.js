import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react';

const Map = () => {

const NEXT_PUBLIC_MAP_API = //TOKEN

mapboxgl.accessToken = NEXT_PUBLIC_MAP_API


    return (
        <div>Map</div>
    )
}

export default Map;