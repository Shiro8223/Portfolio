import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRefresh } from "../context/RefreshContext";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const { refreshKey } = useRefresh();

  const projectList = [
    {
      title: "VahallaKetta",
      description:
        "Delivered a production Next.js site (TS, React and Tailwind) on Vercel with server-side data rendering, email pipeline with env-based secrets, image optimization, and structured data. Implemented on-demand ISR to keep cat listings fresh without full redeploys.",
      thumbnail: "/images/vk-thumbnail.jpg",
      link: "https://vahallakettasavannahs.co.uk", 
    },
    {
      title: "Pokemon Spin the wheel",
      description:
        "a fun project idea using javascript and API's to select 2 random pokemon to eliminate with imported sprite data. (Starting spin delay of 10 seconds for automation purposes)",
      thumbnail: "/images/ps-thumbnail.jpg",
      link: "https://shiro8223.github.io/PokeSpinner/",
    },
    {
      title: "Sorting Algorithm Visualizer",
      description:
        "A univeristy web dev project that uses HTML,CSS,JS to display visual demonstrations of different sorting algorithms.",
      thumbnail: "/images/sav-thumbnail.jpg",
      link: "https://shiro8223.github.io/SortingAlgorithmVisualizer/",
    },
    {
    title: "Skill Tree maker",
      description:
        "A Next.js (TS, React and Tailwind) project for designing skill trees, adding + customising nodes with connection lines, exporting and importing projects on local storage as .json files on an infinite draggable grid!",
      thumbnail: "/images/st-thumbnail.jpg",
      link: "https://skill-tree-43o6tubu9-shaun-taylors-projects.vercel.app",
    }
    
  ];

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
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block border border-black rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer opacity-0 bg-gray-50"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-56 object-cover border-b border-black"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-3 text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
