

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { COLORS, MINERALS } from "../utils/constant"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const isMainPage = location.pathname === "/"

  const scrollToSection = (sectionId) => {
    if (isMainPage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to main page with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
        >
          <div className="h-9 w-9 rounded-md overflow-hidden ring-1 ring-black/5 bg-white">
            <img
              src="/assets/Companies Logo FINAL-10.png"
              alt="BRB Mineraloop"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-semibold tracking-tight">BRB Mineraloop</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
          >
            About
          </button>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
            >
              Minerals
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg ring-1 ring-black/5 py-2 z-50">
                {MINERALS.map((mineral) => (
                  <Link
                    key={mineral.slug}
                    to={`/mineral/${mineral.slug}`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <div className="font-medium">{mineral.name}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2">{mineral.summary}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("sustainability")}
            className="text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
          >
            Sustainability
          </button>
          <button
            onClick={() => scrollToSection("operations")}
            className="text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
          >
            Operations
          </button>
          <button
            onClick={() => scrollToSection("why-brb")}
            className="text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
          >
            Why BRB
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-white"
            style={{ backgroundColor: COLORS.liberty }}
          >
            Request a Quote
          </button>
        </div>
      </nav>
    </header>
  )
}
