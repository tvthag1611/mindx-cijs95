import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routers/routes";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";
import GlobalProvider from "./context";
import LayoutPage from "./components/layout/Layout";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="" element={<PrivateRouter />}>
          <Route path="" element={<LayoutPage />}>
            {privateRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={route.component}
                  key={index}
                />
              );
            })}
          </Route>
        </Route>
        <Route path="" element={<PublicRouter />}>
          {publicRoutes.map((route, index) => {
            return (
              <Route path={route.path} element={route.component} key={index} />
            );
          })}
        </Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
