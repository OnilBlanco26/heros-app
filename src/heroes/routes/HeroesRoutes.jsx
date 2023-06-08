import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../../ui/components/Navbar"
import MarvelPage from "../pages/MarvelPage"
import DcPage from "../pages/DcPage"

const HeroesRoutes = () => {
  return (
    <div>
        <Navbar />
        <div className="m-4">
        <Routes >
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="search" element={<DcPage />} />
            <Route path="hero" element={<DcPage />} />

            <Route path="/" element={<Navigate to={'/marvel'} />} />

        </Routes>
        </div>
    </div>
  )
}

export default HeroesRoutes