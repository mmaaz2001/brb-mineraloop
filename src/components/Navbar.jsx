import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { COLORS, MINERALS } from "../utils/constant";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);          // desktop Minerals
  const [mobileOpen, setMobileOpen] = useState(false);                  // whole mobile panel
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

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setMobileOpen(false);
    setMobileMineralsOpen(false);
  }, [location.pathname]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (desktopDropRef.current && !desktopDropRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const navBtn =
    "text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
          onClick={() => setMobileOpen(false)}
        >
          <div className="h-9 w-9 rounded-md overflow-hidden ring-1 ring-black/5 bg-white">
            <img
              src="/assets/Companies Logo FINAL-10.png"
              alt="BRB Mineraloop"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-semibold tracking-tight">BRB Mineraloop</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollToSection("about")} className={navBtn}>
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
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg ring-1 ring-black/5 py-2 z-50">
                {MINERALS.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/mineral/${m.slug}`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <div className="font-medium">{m.name}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2">{m.summary}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => scrollToSection("sustainability")} className={navBtn}>
            Sustainability
          </button>
          <button onClick={() => scrollToSection("operations")} className={navBtn}>
            Operations
          </button>
          <button onClick={() => scrollToSection("why-brb")} className={navBtn}>
            Why BRB
          </button>
          <button onClick={() => scrollToSection("contact")} className={navBtn}>
            Contact
          </button>
        </div>

        {/* CTA (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-white"
            style={{ backgroundColor: COLORS.liberty }}
          >
            Request a Quote
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden border-t bg-white shadow-sm ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <nav className="px-4 py-3 space-y-1">
          <button
            onClick={() => {
              scrollToSection("about");
              setMobileOpen(false);
            }}
            className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
          >
            About
          </button>

          {/* Mobile Minerals collapsible */}
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
              className={`overflow-hidden transition-all ${
                mobileMineralsOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-3 py-1 overflow-auto h-[15vh]">
                {MINERALS.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/mineral/${m.slug}`}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileMineralsOpen(false);
                    }}
                    className="block px-2 py-2 text-sm text-slate-700 rounded hover:bg-slate-50"
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
            className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
          >
            Sustainability
          </button>
          <button
            onClick={() => {
              scrollToSection("operations");
              setMobileOpen(false);
            }}
            className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
          >
            Operations
          </button>
          <button
            onClick={() => {
              scrollToSection("why-brb");
              setMobileOpen(false);
            }}
            className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
          >
            Why BRB
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileOpen(false);
            }}
            className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
          >
            Contact
          </button>

          {/* CTA inside mobile menu */}
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileOpen(false);
            }}
            className="mt-2 w-full inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium shadow text-white"
            style={{ backgroundColor: COLORS.liberty }}
          >
            Request a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}
