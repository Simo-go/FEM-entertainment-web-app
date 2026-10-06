import { Outlet } from "react-router";

import Main from "../components/main/Main";
import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/searchbar/SearchBar";

import styles from "./AppLayout.module.css";
import { useState } from "react";

function AppLayout() {
  const [query, setQuery] = useState("");

  return (
    <div className={`${styles.appContainer}`}>
      <NavBar />
      <Main>
        <SearchBar query={query} setQuery={setQuery} />
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
