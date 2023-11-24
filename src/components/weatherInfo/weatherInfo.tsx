import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWeatherState } from "../../types/state";
import { iconProps } from "../../stubs";
import {
  faCompressAlt,
  faDroplet,
  faTemperatureHigh,
  faThermometer2,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export const WeatherInfo: FC<IWeatherState> = ({
  humidity,
  temp_c,
  feelslike_c,
  wind_degree,
  pressure_mb,
}) => {
  return (
    <ul>
      <li>
        <FontAwesomeIcon icon={faDroplet} {...iconProps} />
        <span>Humidity (%)</span>
        <b>{humidity}</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faThermometer2} {...iconProps} />
        <span>Temperature (C)</span>
        <b>{temp_c}</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faTemperatureHigh} {...iconProps} />
        <span>Feels Like (C)</span>
        <b>{feelslike_c}</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faWind} {...iconProps} /> <span>Wind</span>
        <b>{wind_degree}</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faCompressAlt} {...iconProps} />
        <span>Pressure</span>
        <b>{pressure_mb}</b>
      </li>
    </ul>
  );
};
