/** @format */

import { useContext, FC } from "react";
import { SearchForm } from "./SearchForm";
import MovieContext from "../../context/movieContext";
import "../../styles/Global.css";
import "../../styles/searchMovie.css";
import { SearchList } from "./SearchList";

export const SearchScreen: FC = () => {
  const { isLoading, error } = useContext(MovieContext);

  return (
    <section>
      <SearchForm />
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error-msg">{error}</p>}
      <SearchList />
    </section>
  );
};
