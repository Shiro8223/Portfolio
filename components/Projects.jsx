import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRefresh } from "../context/RefreshContext";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    title: "Cortex Tree",
    description:
      "An AI driven Vertical scaling full stack B2B and B2C SaaS for creating complex reactive skill tree's with Next.Js, React, Tailwind, Typsescript, Supabase hosted on Vercel with a custom domain with Google Oauth authentication.",
    thumbnail: "/images/st-thumbnail.JPG",
    link: "https://cortextree.com",
    skills: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "React", color: "bg-blue-200 text-blue-700" },
      { name: "Tailwind CSS", color: "bg-cyan-200 text-cyan-700" },
      { name: "TypeScript", color: "bg-blue-300 text-blue-800" },
      { name: "Supabase", color: "bg-emerald-200 text-emerald-700" },
      { name: "Google OAuth", color: "bg-red-200 text-red-700" },
    ],
  },
  {
    title: "AltView",
    description:
      "A Red-Ocelot project for visualising repository data from github as well as a supabase DB using a NextJS stack with Recharts and ML insights with github Oauth.",
    thumbnail: "/images/av-thumbnail.JPG",
    link: "https://hack-camp.vercel.app",
    skills: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "Recharts", color: "bg-pink-200 text-pink-700" },
      { name: "Supabase", color: "bg-emerald-200 text-emerald-700" },
      { name: "GitHub OAuth", color: "bg-gray-300 text-gray-800" },
      { name: "Machine Learning", color: "bg-indigo-300 text-indigo-800" },
    ],
  },
  {
    title: "Elven Dev",
    description:
      "Cofounder of Elven Dev; a software company aimed at renovating businesses online presence",
    thumbnail: "/images/ed-thumbnail.PNG",
    link: "https://www.elvendev.com",
    skills: [
      { name: "Web Design", color: "bg-pink-200 text-pink-700" },
      { name: "Branding", color: "bg-purple-200 text-purple-700" },
      { name: "Business Strategy", color: "bg-yellow-200 text-yellow-700" },
    ],
  },
  {
    title: "VahallaKetta",
    description:
      "Delivered a production Next.js site (TS, React and Tailwind) on Vercel with server-side data rendering, email pipeline with env-based secrets, image optimization, and structured data. Implemented on-demand ISR to keep cat listings fresh without full redeploys.",
    thumbnail: "/images/vk-thumbnail.jpg",
    link: "https://vahallakettasavannahs.co.uk",
    skills: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "TypeScript", color: "bg-blue-300 text-blue-800" },
      { name: "Tailwind CSS", color: "bg-cyan-200 text-cyan-700" },
      { name: "Vercel", color: "bg-gray-200 text-gray-800" },
      { name: "ISR", color: "bg-green-200 text-green-700" },
    ],
  },
  {
    title: "Pokemon Spin the wheel",
    description:
      "a fun project idea using javascript and API's to select 2 random pokemon to eliminate with imported sprite data. (Starting spin delay of 10 seconds for automation purposes)",
    thumbnail: "/images/ps-thumbnail.jpg",
    link: "https://shiro8223.github.io/PokeSpinner/",
    skills: [
      { name: "JavaScript", color: "bg-yellow-200 text-yellow-700" },
      { name: "API Integration", color: "bg-indigo-200 text-indigo-700" },
      { name: "HTML5", color: "bg-orange-200 text-orange-700" },
      { name: "CSS3", color: "bg-purple-200 text-purple-700" },
    ],
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "A univeristy web dev project that uses HTML,CSS,JS to display visual demonstrations of different sorting algorithms.",
    thumbnail: "/images/sav-thumbnail.jpg",
    link: "https://shiro8223.github.io/SortingAlgorithmVisualizer/",
    skills: [
      { name: "HTML5", color: "bg-orange-200 text-orange-700" },
      { name: "CSS3", color: "bg-purple-200 text-purple-700" },
      { name: "JavaScript", color: "bg-yellow-200 text-yellow-700" },
    ],
  },
];

const SWIPE_THRESHOLD = 60;

// deduped, ordered list of every skill pill across all projects for the intro reveal
const allSkills = projectList
  .flatMap((project) => project.skills)
  .filter((skill, index, arr) => arr.findIndex((s) => s.name === skill.name) === index);

const skillPillContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const skillPillVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function Projects() {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const { refreshKey } = useRefresh();
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + projectList.length) % projectList.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % projectList.length);

  const selectIndex = (index) => {
    if (isDraggingRef.current) return;
    setActiveIndex(index);
  };

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -400) {
      goNext();
    } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 400) {
      goPrev();
    }
    // swallow the click that fires right after a drag release
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(cards);
    };
  }, [refreshKey]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="min-h-screen px-6 py-24 bg-white text-black"
      key={refreshKey}
    >
      <h2 className="font-heading text-4xl font-bold mb-4 text-center">Projects</h2>

      <motion.div
        variants={skillPillContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="mb-12 flex flex-wrap justify-center gap-3"
      >
        {allSkills.map((skill) => (
          <motion.span
            key={skill.name}
            variants={skillPillVariants}
            className={`rounded-full px-3 py-1 text-sm font-medium ${skill.color}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-14 sm:px-16">
        <motion.button
          type="button"
          onClick={goPrev}
          aria-label="Previous project"
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl shadow-lg"
        >
          &#8592;
        </motion.button>
        <motion.button
          type="button"
          onClick={goNext}
          aria-label="Next project"
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl shadow-lg"
        >
          &#8594;
        </motion.button>

        <motion.div
          drag="x"
          dragElastic={0.15}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => {
            isDraggingRef.current = true;
          }}
          onDragEnd={handleDragEnd}
          className="flex h-[380px] sm:h-[440px] md:h-[480px] gap-2 overflow-hidden rounded-2xl border border-black bg-gray-50 cursor-grab active:cursor-grabbing"
        >
          {projectList.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={project.title}
                layout
                animate={{ flexGrow: isActive ? 8 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 28 }}
                onClick={() => selectIndex(index)}
                className="project-card relative flex-shrink min-w-[48px] h-full overflow-hidden cursor-pointer opacity-0 border-r border-black last:border-r-0"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity ${
                    isActive ? "opacity-60" : "opacity-80"
                  }`}
                />

                {!isActive && (
                  <span className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 rotate-180 text-white font-semibold text-sm tracking-wide whitespace-nowrap [writing-mode:vertical-rl]">
                    {project.title}
                  </span>
                )}

                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 sm:p-6 pt-10 text-white backdrop-blur-md bg-black/30">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed max-h-24 sm:max-h-32 overflow-y-auto text-gray-100">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`rounded-full px-2.5 py-1 text-xs font-medium ${skill.color}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group relative mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-amber-300 no-underline"
                    >
                      Visit Project ↗
                      <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-amber-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
