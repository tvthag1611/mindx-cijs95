import About from "../components/About";
import Home from "../components/Home";
import Page404 from "../components/layout/404";
import Login from "../components/login/Login";

const privateRoutes = [
  { path: "/", component: <Home /> },
  {
    path: "/about",
    component: <About />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  {
    path: "*",
    component: <Page404 />,
  },
];

export { privateRoutes, publicRoutes };
