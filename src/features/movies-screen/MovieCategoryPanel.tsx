/** @format */

import { FC } from "react";
import { CategoryButton } from "./CategoryButton";
import "../../styles/movieCategory.css";
import "../../styles/Global.css";

type MovieCategoryPanelProps = {
  category: string;
  onCategoryClick: (category: string) => void;
};

export const MovieCategoryPanel: FC<MovieCategoryPanelProps> = ({
  category,
  onCategoryClick,
}) => {
  return (
    <div className="category-btn-holder">
      <CategoryButton
        label="Popular"
        onCategoryClick={onCategoryClick}
        category={category}
        buttonValue={"popular"}
      />
      <CategoryButton
        label="Top Rated"
        onCategoryClick={onCategoryClick}
        category={category}
        buttonValue={"top_rated"}
      />

      <CategoryButton
        label="Upcoming"
        onCategoryClick={onCategoryClick}
        category={category}
        buttonValue={"upcoming"}
      />
    </div>
  );
};
