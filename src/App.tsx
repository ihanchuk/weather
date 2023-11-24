import { BrowserRouter } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Header } from "./components/header/header";
import { SideBar } from "./components/sideBar";
import { Footer } from "./components/footer";
import { RouterOutlet } from "./components/routing";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Grid container spacing={2}>
          <SideBar />
          <RouterOutlet />
        </Grid>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
