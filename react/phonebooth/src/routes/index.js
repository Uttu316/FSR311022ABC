import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { ROUTES } from "./routesConfig";

//V.4

function AppRoutes() {
  return (
    <RouterProvider router={ROUTES}/>
  );
}

{
  /* <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route  key={route.path + "_" + index} path={route.path} element={<PrivateRoute {...route}/>}/>
        ))}
      </Routes>
    </BrowserRouter>  */
}

export default AppRoutes;
