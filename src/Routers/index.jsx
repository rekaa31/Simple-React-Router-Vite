import { Route, Routes } from "react-router-dom";
import Article from "../Pages/Article";
import Contact from "../Pages/Contact";
import Detail from "../Pages/Article/Detail";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Main from "../Layouts/Main";

export default function Routers() {
  
	const LIST_ROUTES = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/article/:id",
      element: <Detail />,
    },
  ];

  return (
    <Routes>
      {LIST_ROUTES.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<Main>{route.element}</Main>}
        />
      ))}
    </Routes>
  );
}
