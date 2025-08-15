import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import MineralDetail from "./pages/MineralDetail"
import { COLORS } from "./utils/constant"
import Phone from "./components/Phone" // Import Phone component
import Mail from "./components/Mail" // Import Mail component

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full text-slate-900 bg-white">
        {/* Top ribbon */}
        <div style={{ backgroundColor: COLORS.primary }} className="w-full text-white text-sm">
          <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
            <p className="font-medium tracking-wide">From Raw Potential to Real Power</p>
            <div className="hidden sm:flex items-center gap-6 opacity-90">
              <a href="tel:+92111272111" className="inline-flex items-center gap-2 hover:opacity-100 rounded px-1">
                <Phone className="h-4 w-4" /> 111 272 111
              </a>
              <a
                href="mailto:info@brbgroup.pk"
                className="inline-flex items-center gap-2 hover:opacity-100 rounded px-1"
              >
                <Mail className="h-4 w-4" /> info@brbgroup.pk
              </a>
            </div>
          </div>
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mineral/:mineralName" element={<MineralDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
