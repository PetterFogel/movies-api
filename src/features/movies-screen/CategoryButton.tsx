/** @format */

import { FC } from "react";
import { checkPickedCategory } from "../../common/functions/check-picked-category/checkPickedCategoryHandler";

type CategoryButtonProps = {
  label: string;
  onCategoryClick: (category: string) => void;
  category: string;
  buttonValue: string;
};

export const CategoryButton: FC<CategoryButtonProps> = ({
  label,
  onCategoryClick,
  category,
  buttonValue,
}) => {
  return (
    <button
      className="category-btn"
      style={{ background: checkPickedCategory(category, buttonValue) }}
      onClick={() => onCategoryClick(buttonValue)}
    >
      {label}
    </button>
  );
};
