// ScrollManager.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // If there’s a #hash, scroll to that element
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // Otherwise, go to top on every route change
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // Optional: disable native scroll restoration for SPA navigation
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => (window.history.scrollRestoration = prev);
    }
  }, []);

  return null;
}
