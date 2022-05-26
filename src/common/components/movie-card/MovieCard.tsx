/** @format */

import { FC } from "react";
import "../../../styles/movieCard.css";

type MovieCardProps = {
  children: any;
};

export const MovieCard: FC<MovieCardProps> = ({ children }) => {
  return <div className="card-container">{children}</div>;
};
