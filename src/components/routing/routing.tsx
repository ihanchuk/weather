import React, { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Route, Routes } from "react-router-dom";
import { WeatherPage } from "../../pages/weather";
import { CityPage } from "../../pages/city";

export const RouterOutlet: FC = () => {
  const fake = (
    <div>
      <h1>Fake Page</h1>
    </div>
  );
  return (
    <Grid xs={12} lg={8} md={10}>
      <div>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/fake" element={fake} />
        </Routes>
      </div>
    </Grid>
  );
};
