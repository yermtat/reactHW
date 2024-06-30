import Home from "./Home";
import Login from "./Login";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
