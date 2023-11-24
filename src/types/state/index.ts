export interface IWeatherState {
  city: string;
  fetchedOK: boolean;
  resolved: boolean;
  forecast: string;
  icon: string;
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  pressure_in: number;
  pressure_mb: number;
}
