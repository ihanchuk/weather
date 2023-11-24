import { IWeatherState } from "../types/state";
import { TIcon } from "../types/ui";

export const weatherStateStub: IWeatherState = {
  city: "",
  fetchedOK: false,
  resolved: false,
  forecast: "",
  icon: "",
  temp_c: 0,
  feelslike_c: 0,
  humidity: 0,
  wind_degree: 0,
  wind_dir: "WSW",
  wind_kph: 0,
  pressure_in: 0,
  pressure_mb: 0,
};

export const iconProps: TIcon = {
  size: "2x",
  color: "white",
};
