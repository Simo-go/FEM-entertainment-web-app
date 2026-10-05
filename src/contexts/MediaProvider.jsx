import { createContext, useContext, useEffect, useReducer } from "react";

const MediaContext = createContext();
const initialState = {
  media: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "media/loading":
      return { ...state, isLoading: true, error: "" };
    case "media/loaded":
      return { ...state, isLoading: false, media: action.payload };
    case "media/error":
      return { ...state, isLoading: false, error: action.payload };
  }
}

function MediaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchMovies() {
      dispatch({ type: "media/loading" });

      try {
        const res = await fetch("http://localhost:3000/media");

        if (!res.ok) throw new Error("Problem during fetching of media");

        const data = await res.json();
        dispatch({ type: "media/loaded", payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "media/error", payload: err.message });
      }
    }

    fetchMovies();
  }, []);

  return <MediaContext.Provider value={{ state, dispatch }}>{children}</MediaContext.Provider>;
}

function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) throw new Error("Cannot access MediaContext outside of Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MediaProvider, useMedia };
