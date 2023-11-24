import { FC } from "react";
import styles from "./headng.module.scss";

export interface IWeatherHeading {
  city: string;
  forecast: string;
  icon: string;
}

export const WeatherHeading: FC<IWeatherHeading> = ({
  city,
  forecast,
  icon,
}) => {
  return (
    <div className={styles.heading}>
      <h1>
        Weather in: {city} <img src={icon} alt={forecast} />
      </h1>
      <p>{forecast}</p>
    </div>
  );
};
