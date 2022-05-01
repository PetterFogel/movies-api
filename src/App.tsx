import { FC } from "react";
import { Header } from "./common/components/Header";
import { AppRoutes } from "./app-routes/AppRoutes";

export const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

