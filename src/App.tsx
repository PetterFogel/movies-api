import { FC } from "react";
import { Header } from "./components/layout/Header";
import { AppRoutes } from "./components/layout/AppRoutes";

export const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

