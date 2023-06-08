import {  Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import HeroesRoutes from "../heroes/routes/HeroesRoutes"

const AppRouter = () => {
  return (
    <div className="m-4">
        <Routes >
          
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<HeroesRoutes />} />

        </Routes>
    </div>
  )
}

export default AppRouter