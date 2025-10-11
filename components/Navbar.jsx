import { motion } from "framer-motion";
import { useRefresh } from '../context/RefreshContext';

export default function Navbar() {
  const { refresh } = useRefresh();
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black text-white px-0 py-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 18,
        duration: 0.6,
        delay: 0.15,
      }}
    >
      <div className="flex justify-between items-center mx-[50px]">
        <div className="text-xl font-semibold tracking-tight">S. Taylor Portfolio</div>
        <div className="flex gap-8 text-lg font-medium tracking-tight">
          <a
            href="#projects"
            className="nav-link"
            onClick={() => {
              refresh();
              window.location.hash = "projects"; // keeps anchor scroll behavior
            }}
          >
            Work
          </a>
          <a
            href="#Resume"
            className="nav-link"
            onClick={() => {
              refresh();
              window.location.hash = "aboutMe"; // keeps anchor scroll behavior
            }}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => {
              refresh();
              window.location.hash = "contact"; // keeps anchor scroll behavior
            }}
          >
            Contact
          </a>
          <a
            href="#Blog"
            className="nav-link"
            onClick={() => {
              refresh();
              window.location.hash = "Blog"; // keeps anchor scroll behavior
            }}
          >
            Blog
          </a>

        </div>
      </div>
    </motion.nav>
  );
}
