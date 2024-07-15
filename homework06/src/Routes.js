import Home from "./Home";
import ItemCard from "./ItemCard";
import NewsPage from "./NewsPage";
import About from "./About";
import Main from "./Main";

const homeChidren = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/home/:itemId",
    element: <ItemCard />,
  },
  {
    path: "newspage",
    element: <NewsPage />,
  },
  {
    path: "main",
    element: <Main />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "*",
    element: <Main />,
  },
];

const routes = [
  {
    path: "/",
    element: <Home />,
    children: homeChidren,
  },
  {
    path: "/home",
    element: <Home />,
    children: homeChidren.slice(1),
  },
];

export default routes;
