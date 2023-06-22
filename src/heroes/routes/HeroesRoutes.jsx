import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../../ui/components/Navbar"
import MarvelPage from "../pages/MarvelPage"
import DcPage from "../pages/DcPage"
import HeroPage from "../pages/HeroPage"
import SearchPage from "../components/SearchPage"

const HeroesRoutes = () => {
  return (
    <div>
        <Navbar />
        <div className="m-4">
        <Routes >
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:heroId" element={<HeroPage />} />

            <Route path="/" element={<Navigate to={'/marvel'} />} />

        </Routes>
        </div>
    </div>
  )
}

export default HeroesRoutes