import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./sideBar.module.scss";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Grid xs={12} lg={2} md={2}>
      <div className={styles.menu}>
        <h3>Automatic</h3>
        <ul>
          <li>
            <Link to="/">Your city</Link>
          </li>
        </ul>

        <h3>All cities</h3>
        <ul>
          <li>
            <Link to="/fake">Fake Page</Link>
          </li>
        </ul>
      </div>
    </Grid>
  );
};
