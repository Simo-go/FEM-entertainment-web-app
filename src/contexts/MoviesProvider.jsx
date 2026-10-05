import { createContext, useContext } from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  return <MoviesContext.Provider value={{ test: "none" }}>{children}</MoviesContext.Provider>;
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (context === undefined) throw new Error("Cannot access MoviesContext outside of Provider");
  return context;
}

export { MoviesProvider, useMovies };
