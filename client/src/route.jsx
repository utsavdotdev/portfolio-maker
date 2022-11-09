import { useRoutes } from "react-router-dom";
import NavFoot from "./layout/NavFoot";
import Hero from "./pages/Hero";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavFoot />,
      children: [{ path: "", element: <Hero /> }],
    },
    {
      path: "/:user",
      element: <Portfolio />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
