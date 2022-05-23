/** @format */

import { FC } from "react";
import { checkPickedCateGoryHandler } from "../../common/functions/checkPickedCategoryHandler/checkPickedCategoryHandler";

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
      style={{ background: checkPickedCateGoryHandler(category, buttonValue) }}
      onClick={() => onCategoryClick(buttonValue)}
    >
      {label}
    </button>
  );
};
