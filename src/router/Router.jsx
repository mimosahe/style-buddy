import { Route, Routes } from "react-router-dom";
import { TodayPage } from "../components/TodayPage";

import { Page404 } from "../components/NomatchPage";
import { ItemlistRoutes } from "./ItemlistRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/">
        <TodayPage />
      </Route>
      <Route
        path="/Itemlist"
        render={({ match: { url } }) => (
          <Routes>
            {ItemlistRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Routes>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Routes>
  );
};
