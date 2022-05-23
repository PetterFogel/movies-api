/** @format */

export const checkPickedCateGoryHandler = (
  filter: string,
  category: string
) => {
  return filter === category ? "#222" : "#111";
};
