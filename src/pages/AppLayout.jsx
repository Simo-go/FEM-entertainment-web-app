import { Outlet } from "react-router";

import Main from "../components/Main";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Searchbar";

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
