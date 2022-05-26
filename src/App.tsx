/** @format */

import { FC } from "react";
import { Header } from "./common/components/header/Header";
import { AppRoutes } from "./app-routes/AppRoutes";

export const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};
