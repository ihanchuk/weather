import React, { useCallback, useEffect, useState } from "react";
import { APP_CONFIG } from "../config";
import { usePolling } from "../hooks/polling";
import { WeatherInfo } from "../components/weatherInfo";
import {
  wetherErrorDataToState,
  wetherRawDataToState,
} from "../api/middlewares";
import { weatherStateStub } from "../stubs";
import { ErrorMessage } from "../components/errorMessage";

import { WeatherHeading } from "../components/heading";
import { useQuery } from "../hooks/query";
import styles from "./weather.module.scss";
import { getCityWeather } from "../api/resolvers";

export const CityPage = () => {
  let query = useQuery();
  const cityName = query.get("name");
  const [weatherState, setWeatherState] = useState(weatherStateStub);

  const isOkToShowWeatherFetchError =
    !weatherState.fetchedOK && weatherState.resolved;

  const isStillLoadingWeatherData = !weatherState.resolved;

  const customBackground = {
    background: !isStillLoadingWeatherData
      ? `url('${APP_CONFIG.imagesUrl}${weatherState.city}')`
      : "silver",
  };

  const getWeather = useCallback(() => {
    getCityWeather(0, 0, true, cityName!)
      .then((response) => setWeatherState(wetherRawDataToState(response.data)))
      .catch((err) => {
        setWeatherState(wetherErrorDataToState(err));
      });
  }, [cityName]);

  useEffect(() => {
    getWeather();
  }, [cityName, getWeather]);

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

        {isOkToShowWeatherFetchError && (
          <ErrorMessage message="Failed to fetch Weather :-(" />
        )}
        {isStillLoadingWeatherData && <ErrorMessage message="Resolving data" />}
      </div>
    </div>
  );
};
