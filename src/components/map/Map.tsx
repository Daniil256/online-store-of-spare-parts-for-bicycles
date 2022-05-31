import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const API_KEY: string = process.env.REACT_APP_API_KEY || "";

interface containerStyle {
  width: string;
  height: string;
  margin: number;
}

const containerStyle: containerStyle = {
  width: "100%",
  height: "100%",
  margin: 0,
};

interface center {
  lat: number;
  lng: number;
}

const center: center = {
  lat: 51.7727,
  lng: 55.0988,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [, setMap] = useState<null | string>(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
