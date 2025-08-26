import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { COLORS, MINERALS } from "../utils/constant";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);          // desktop Minerals
  const [mobileOpen, setMobileOpen] = useState(false);                  // whole mobile/tablet panel
  const [mobileMineralsOpen, setMobileMineralsOpen] = useState(false);  // mobile Minerals
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const desktopDropRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const go = () => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (isMainPage) {
      go();
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    setIsDropdownOpen(false);
    setMobileOpen(false);
    setMobileMineralsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (desktopDropRef.current && !desktopDropRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Active link helper
  const isActive = (path) => location.pathname === path;

  // Base navBtn style
const navBtn =
  "relative text-gray-500 hover:text-sky-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 md:px-2 cursor-pointer after:content-[''] after:absolute after:right-0 after:bottom-[-10px] after:h-[2px] after:w-0 after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <nav className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 h-16 lg:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
          onClick={() => setMobileOpen(false)}
        >
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-md overflow-hidden ring-1 ring-black/5 bg-white shrink-0">
            <img
              src="/assets/Companies Logo FINAL-10.png"
              alt="BRB Mineraloop"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-semibold tracking-tight text-sm sm:text-base">
            BRB Mineraloop
          </span>
        </Link>

        {/* Desktop nav (≥1024px only) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-9 text-md font-bold">
          <div  className="flex items-center gap-1 xl:gap-3">
            <button
              onClick={() => scrollToSection("about")}
              className={`${navBtn} ${isActive("/#about") ? "text-sky-600  underline decoration-dashed decoration-2 underline-offset-4" : ""}`}
            >
              About
            </button>

            <div className="relative" ref={desktopDropRef}>
              <button
                onClick={() => setIsDropdownOpen((v) => !v)}
                className={`flex items-center gap-1 ${navBtn}`}
                aria-haspopup="menu"
                aria-expanded={isDropdownOpen}
              >
                Minerals
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg ring-1 ring-black/5 py-2 z-50 max-h-[60vh] overflow-auto">
                  {MINERALS.map((m) => (
                    <Link
                      key={m.slug}
                      to={`/mineral/${m.slug}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-100 hover:text-sky-700 transition-all duration-300 rounded-lg"
                    >
                      <div className="font-medium">{m.name}</div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-2">{m.summary}</div>
                    </Link>

                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("sustainability")}
              className={`${navBtn} ${isActive("/#sustainability") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""}`}
            >
              Sustainability
            </button>
            <button
              onClick={() => scrollToSection("operations")}
              className={`${navBtn} ${isActive("/#operations") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""}`}
            >
              Operations
            </button>
            <button
              onClick={() => scrollToSection("why-brb")}
              className={`${navBtn} ${isActive("/#why-brb") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""}`}
            >
              Why BRB
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${navBtn} ${isActive("/#contact") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""}`}
            >
              Contact
            </button>
          </div>
          <div className="pl-5" >
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: COLORS.liberty }}
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* CTA (desktop only) */}
        {/* <div className="hidden lg:flex items-center gap-2"> */}

        {/* </div> */}

        {/* Hamburger (phones + tablets) */}
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile/Tablet panel (≤1024px) */}
      <div className={`lg:hidden border-t bg-white shadow-sm ${mobileOpen ? "block" : "hidden"}`}>
        <nav className="px-4 py-3 space-y-1">
          <button
            onClick={() => {
              scrollToSection("about");
              setMobileOpen(false);
            }}
            className={`w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${isActive("/#about") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""
              }`}
          >
            About
          </button>

          {/* Minerals collapsible */}
          <div className="w-full">
            <button
              onClick={() => setMobileMineralsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-slate-50"
              aria-expanded={mobileMineralsOpen}
            >
              <span>Minerals</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileMineralsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileMineralsOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-3 py-1 overflow-auto max-h-[20vh]">
                {MINERALS.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/mineral/${m.slug}`}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileMineralsOpen(false);
                    }}
                    className={`block px-2 py-2 text-sm rounded hover:bg-slate-50 ${location.pathname === `/mineral/${m.slug}`
                      ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4"
                      : ""
                      }`}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              scrollToSection("sustainability");
              setMobileOpen(false);
            }}
            className={`w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${isActive("/#sustainability") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""
              }`}
          >
            Sustainability
          </button>
          <button
            onClick={() => {
              scrollToSection("operations");
              setMobileOpen(false);
            }}
            className={`w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${isActive("/#operations") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""
              }`}
          >
            Operations
          </button>
          <button
            onClick={() => {
              scrollToSection("why-brb");
              setMobileOpen(false);
            }}
            className={`w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${isActive("/#why-brb") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""
              }`}
          >
            Why BRB
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileOpen(false);
            }}
            className={`w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${isActive("/#contact") ? "text-sky-600 underline decoration-dashed decoration-2 underline-offset-4" : ""
              }`}
          >
            Contact
          </button>

          {/* CTA inside mobile/tablet menu */}
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileOpen(false);
            }}
            className="mt-2 w-full inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: COLORS.liberty }}
          >
            Request a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}
