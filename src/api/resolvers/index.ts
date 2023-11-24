import axios from "axios";
import { IWeatherApiResponse } from "../../types/api";
import { APP_CONFIG } from "../../config";

export const getCityWeather = (
  lat: number,
  long: number,
  byCity = false,
  cityName = "",
  apiKey = APP_CONFIG.apiKey,
  apiRoot = APP_CONFIG.apiRoot
) => {
  const query = byCity ? `&q=${cityName} ` : `&q=${lat},${long}`;
  return axios.get<IWeatherApiResponse>(
    `${apiRoot}v1/current.json?key=${apiKey}${query}`
  );
};
