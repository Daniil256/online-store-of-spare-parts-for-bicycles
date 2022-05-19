import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
    width: '100%',
    height: '100%',
    margin: 0
};

const center = {
    lat: 51.7727,
    lng: 55.0988
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)