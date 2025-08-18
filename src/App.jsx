import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import MineralDetail from "./pages/MineralDetail"
import ScrollManager from "./components/ScrollManager"
import TopBar from "./components/TopBar"

export default function App() {
  return (
    <BrowserRouter>
    <ScrollManager />
      <div className="min-h-screen w-full overflow-x-hidden text-slate-900 bg-white">
       <TopBar/>
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
