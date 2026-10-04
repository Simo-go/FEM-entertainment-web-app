import { Outlet } from "react-router";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Searchbar";

function AppLayout() {
  return (
    <div className="app-container">
      <NavBar />
      <Main>
        <SearchBar />
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
