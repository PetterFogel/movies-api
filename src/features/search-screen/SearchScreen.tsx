/** @format */

import { useContext, FC } from "react";
import { SearchForm } from "./SearchForm";
import { SearchList } from "./SearchList";
import { Loader } from "../../common/components/loader/Loader";
import MovieContext from "../../context/movieContext";
import "../../styles/Global.css";
import "../../styles/searchMovie.css";

export const SearchScreen: FC = () => {
  const { isLoading, error } = useContext(MovieContext);

  return (
    <section>
      <SearchForm />
      {isLoading ? <Loader /> : <SearchList />}
      {error && <p className="error-msg">{error}</p>}
    </section>
  );
};
