import { IWeatherApiResponse } from "../../types/api";
import { IWeatherState } from "../../types/state";

export const wetherRawDataToState = (
  rawData: IWeatherApiResponse
): IWeatherState => {
  const { current: res, location } = rawData;

  const result: IWeatherState = {
    city: location.name,
    fetchedOK: true,
    resolved: true,
    forecast: res.condition.text,
    icon: res.condition.icon,
    temp_c: res.temp_c,
    feelslike_c: res.feelslike_c,
    humidity: res.humidity,
    wind_degree: res.wind_degree,
    wind_dir: res.wind_dir,
    wind_kph: res.wind_kph,
    pressure_in: res.pressure_in,
    pressure_mb: res.pressure_mb,
  };

  return result;
};

export const wetherErrorDataToState = (
  rawData: IWeatherApiResponse
): IWeatherState => {
  const { location } = rawData;

  const result = {
    city: location.name,
    fetchedOK: false,
    resolved: true,
    forecast: "",
    icon: "",
    temp_c: 0,
    feelslike_c: 0,
    humidity: 0,
    wind_degree: 0,
    wind_dir: "",
    wind_kph: 0,
    pressure_in: 0,
    pressure_mb: 0,
  };

  return result;
};
