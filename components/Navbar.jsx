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
        <div className="hidden md:flex gap-8 text-lg font-medium tracking-tight items-center">
          <a href="#projects" className="nav-link" onClick={go("projects")}>Work</a>
          <a href="#Resume" className="nav-link" onClick={go("aboutMe")}>Resume</a>
          
          {/* Social Icons */}
          <div className="flex gap-4 ml-4 border-l border-white/20 pl-4">
            <a 
              href="https://github.com/shiro8223" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/shauntaylor21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.047-8.794 0-9.714h3.554v1.377c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.395 3.733 4.403v5.544zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.771-1.713.923-1.713.153 0 .924.758.924 1.713 0 .947-.771 1.705-.932 1.705zm1.581 11.597H3.756V8.738h3.162v11.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
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
              
              {/* Mobile Social Icons */}
              <div className="flex gap-4 mt-2 pt-4 border-t border-white/10">
                <a 
                  href="https://github.com/shiro8223" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/shauntaylor21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.047-8.794 0-9.714h3.554v1.377c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.395 3.733 4.403v5.544zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.771-1.713.923-1.713.153 0 .924.758.924 1.713 0 .947-.771 1.705-.932 1.705zm1.581 11.597H3.756V8.738h3.162v11.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
