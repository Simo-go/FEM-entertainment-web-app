import { Outlet } from "react-router";

import Main from "../components/main/Main";
import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/searchbar/SearchBar";

import styles from "./AppLayout.module.css";
import { Suspense, useState } from "react";
import PageLoader from "../components/loader/PageLoader";

function AppLayout() {
  const [query, setQuery] = useState("");

  return (
    <div className={`${styles.appContainer}`}>
      <NavBar />
      <Main>
        <SearchBar query={query} setQuery={setQuery} />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
}

export default AppLayout;
