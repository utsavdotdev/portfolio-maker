import { useRoutes } from "react-router-dom";
import Nav from "./layout/Nav";
import NavFoot from "./layout/NavFoot";
import Customization from "./pages/Customization";
import Dashboard from "./pages/Dashboard";
import Domain from "./pages/Domain";
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
      path: "/app",
      element: <Nav />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "domain", element: <Domain /> },
        { path: "customization", element: <Customization /> },
      ],
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
