import { RouterProvider } from "react-router";
import { rootRouter } from "@/router/app.router.tsx";

export const HeroesApp = () => {
  return <RouterProvider router={rootRouter} />;
};
