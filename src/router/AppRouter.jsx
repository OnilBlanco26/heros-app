import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRouter from "./PrivateRouter";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <div className="m-4">
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
              <LoginPage />
          </PublicRoute>
        }/>

        <Route
          path="/*"
          element={
            <PrivateRouter>
             <HeroesRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
