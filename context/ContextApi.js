import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppPovider = ({ children }) => {
  const [value, setvalue] = useState("");
  const [moviesList, setmovies] = useState([]);
  const [DetailMovie, setDetail] = useState({ title: "", posterUrl: "" });
  const [exist, setExist] = useState(false);

  const FetchApi = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=8d6cae4a7af0da765624d17418ba5fa9&query=${value}`
    );
    const { results } = await response.json();

    setmovies(results || []);
    if (results.length == 0) {
      setExist(true);
    } else {
      setExist(false);
    }
  };

  const GetDetailMovie = (title, posterUrl, overview) => {
    console.log(title, posterUrl);
    setDetail({ title, posterUrl, overview });
  };

  return (
    <AppContext.Provider
      value={{
        value,
        setvalue,
        FetchApi,
        moviesList,
        GetDetailMovie,
        DetailMovie,
        exist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppPovider, useGlobalContext };
