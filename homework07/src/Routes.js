import Info from "./Info";
import Edit from "./Edit";

const routes = [
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/",
    element: <Info />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
];

export default routes;
