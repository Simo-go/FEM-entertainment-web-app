import { Outlet } from "react-router";

import Main from "../components/main/Main";
import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/searchbar/SearchBar";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={`${styles.appContainer}`}>
      <NavBar />
      <Main>
        <SearchBar />
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
