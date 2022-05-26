/** @format */

import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import MovieContext from "../../context/movieContext";

export const SearchForm: FC = () => {
  const { searchMovie } = useContext(MovieContext);
  const [inputValue, setInputValue] = useState("");

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    searchMovie(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Movie..."
        value={inputValue}
        onChange={onChangeHandler}
      />
      <button className="search-btn-icon">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
