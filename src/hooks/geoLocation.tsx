import { useState, useEffect } from "react";

const defaultState = {
  resolved: false,
  failed: false,
  faileReason: "unknown",
  longitude: 0,
  latitude: 0,
};

export const useGeoLocation = () => {
  const [state, setState] = useState(defaultState);

  const onLocationSuccess = (geoData: GeolocationPosition) => {
    setState({
      resolved: true,
      failed: false,
      faileReason: "",
      longitude: geoData.coords.longitude,
      latitude: geoData.coords.latitude,
    });
  };
  const onLocationError = (errorResponse: GeolocationPositionError) => {
    setState({
      ...defaultState,
      failed: true,
      resolved: true,
      faileReason: errorResponse.message,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        ...defaultState,
        failed: true,
        resolved: true,
        faileReason: "Not supprted by browser",
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        onLocationSuccess,
        onLocationError
      );
    }
  }, []);

  return state;
};
