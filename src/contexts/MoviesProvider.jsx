import { createContext, useContext, useEffect, useReducer } from "react";

const MoviesContext = createContext();
const initialState = {
  movies: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "movies/loading":
      return { ...state, isLoading: true, error: "" };
    case "movies/loaded":
      return { ...state, isLoading: false, movies: action.payload };
    case "movies/error":
      return { ...state, isLoading: false, error: action.payload };
  }
}

function MoviesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchMovies() {
      dispatch({ type: "movies/loading" });

      try {
        const res = await fetch("http://localhost:3000/media");

        if (!res.ok) throw new Error("Problem during fetching of movies");

        const data = await res.json();
        dispatch({ type: "movies/loaded", payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "movies/error", payload: err.message });
      }
    }

    fetchMovies();
  }, []);

  return <MoviesContext.Provider value={{ state, dispatch }}>{children}</MoviesContext.Provider>;
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (context === undefined) throw new Error("Cannot access MoviesContext outside of Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MoviesProvider, useMovies };
