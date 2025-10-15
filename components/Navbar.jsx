import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRefresh } from "../context/RefreshContext";

export default function Navbar() {
  const { refresh } = useRefresh();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [close]);

  const go = (hash) => () => {
    refresh();
    window.location.hash = hash;
    close();
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black text-white px-0 py-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 110, damping: 18, duration: 0.6, delay: 0.15 }}
    >
      <div className="mx-[50px] flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight">S. Taylor Portfolio</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-lg font-medium tracking-tight">
          <a href="#projects" className="nav-link" onClick={go("projects")}>Work</a>
          <a href="#Resume" className="nav-link" onClick={go("aboutMe")}>Resume</a>
          <a href="#contact" className="nav-link" onClick={go("contact")}>Contact</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon swaps */}
          <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-black/95 border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <div className="px-[50px] py-4 flex flex-col gap-4 text-lg font-medium tracking-tight">
              <a href="#projects" className="nav-link" onClick={go("projects")}>Work</a>
              <a href="#Resume" className="nav-link" onClick={go("aboutMe")}>Resume</a>
              <a href="#contact" className="nav-link" onClick={go("contact")}>Contact</a>
              <a href="#Blog" className="nav-link" onClick={go("Blog")}>Blog</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
