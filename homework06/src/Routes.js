import Home from "./Home";
import ItemCard from "./ItemCard";
import NewsPage from "./NewsPage";
import About from "./About";
import Main from "./Main";
import { loader as itemLoader } from "./ItemCard";
import { loader as newsLoader } from "./NewsPage";

const homeChidren = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "itemscard/:itemId",
    element: <ItemCard />,
    loader: itemLoader,
  },
  {
    path: "newspage/:newsId",
    element: <NewsPage />,
    loader: newsLoader,
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
