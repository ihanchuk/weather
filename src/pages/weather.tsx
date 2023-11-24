import React, { useCallback, useEffect, useState } from "react";
import { APP_CONFIG } from "../config";
import { usePolling } from "../hooks/polling";
import { useGeoLocation } from "../hooks/geoLocation";
import { WeatherInfo } from "../components/weatherInfo";
import {
  wetherErrorDataToState,
  wetherRawDataToState,
} from "../api/middlewares";
import { weatherStateStub } from "../stubs";
import { ErrorMessage } from "../components/errorMessage";

import styles from "./weather.module.scss";
import { WeatherHeading } from "../components/heading";
import { getCityWeather } from "../api/resolvers";

export const WeatherPage = () => {
  const [weatherState, setWeatherState] = useState(weatherStateStub);
  const location = useGeoLocation();

  const isOkToFetchWeather = location.resolved && !location.failed;

  const isOkToShowLocationError = location.failed && location.resolved;

  const isOkToShowWeatherFetchError =
    !weatherState.fetchedOK && weatherState.resolved;

  const isStillLoadingWeatherData = !weatherState.resolved && !location.failed;

  const customBackground = {
    background: isOkToFetchWeather
      ? `url('${APP_CONFIG.imagesUrl}${weatherState.city}')`
      : "silver",
  };

  const getWeather = useCallback(() => {
    if (location.resolved && !location.failed) {
      getCityWeather(location.latitude, location.longitude)
        .then((response) =>
          setWeatherState(wetherRawDataToState(response.data))
        )
        .catch((err) => {
          setWeatherState(wetherErrorDataToState(err));
        });
    }
  }, [location]);

  useEffect(() => {
    if (isOkToFetchWeather) {
      getWeather();
    }
  }, [location, getWeather, isOkToFetchWeather]);

  usePolling(getWeather, APP_CONFIG.refreshRate);

  return (
    <div className={styles.weather} style={customBackground}>
      <div className={styles.weatherInfo}>
        {weatherState.fetchedOK && (
          <>
            <WeatherHeading
              city={weatherState.city}
              forecast={weatherState.forecast}
              icon={weatherState.icon}
            />
            <WeatherInfo {...weatherState} />
          </>
        )}
        {isOkToShowLocationError && (
          <ErrorMessage message="Failed to resolve your location. Please, enable it in browser" />
        )}
        {isOkToShowWeatherFetchError && (
          <ErrorMessage message="Failed to fetch Weather :-(" />
        )}
        {isStillLoadingWeatherData && <ErrorMessage message="Resolving data" />}
      </div>
    </div>
  );
};
