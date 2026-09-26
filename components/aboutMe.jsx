import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Section({ children, accent = "", className = "" }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`rounded-2xl border-2 border-t-8 p-6 sm:p-8 ${accent} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="font-heading mb-1 text-4xl font-bold text-black md:text-5xl">
              About me
            </h1>
            <p className="text-lg text-zinc-700">
              Software engineer, web developer, and problem-solver.
            </p>
          </div>

          <a
            href="/SHAUN_TAYLOR_CV.pdf"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-black px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-pink-600"
            download
            aria-label="Download CV"
          >
            Download CV
          </a>
        </motion.div>

        <Section accent="border-blue-400 bg-blue-50">
          <p className="text-base leading-relaxed text-zinc-700">
            I’m Shaun Taylor, a software engineer with a passion for building digital products that are practical, polished, and genuinely useful. I enjoy working at the intersection of design and engineering, turning ideas into experiences that feel clean, intuitive, and reliable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            My work spans front-end development, product thinking, and modern web architecture. I enjoy collaborating on projects that combine strong user experience with real-world impact, whether that means building a client-facing website, a web app, or a polished internal tool.
          </p>
        </Section>

        <Section accent="border-purple-400 bg-purple-50">
          <h2 className="font-heading mb-4 text-2xl font-semibold text-purple-700">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "React", color: "bg-blue-200 text-blue-700" },
              { name: "Next.js", color: "bg-black text-white" },
              { name: "Tailwind CSS", color: "bg-cyan-200 text-cyan-700" },
              { name: "JavaScript", color: "bg-yellow-200 text-yellow-700" },
              { name: "TypeScript", color: "bg-blue-300 text-blue-800" },
              { name: "HTML5", color: "bg-orange-200 text-orange-700" },
              { name: "CSS3", color: "bg-purple-200 text-purple-700" },
              { name: "Node.js", color: "bg-green-200 text-green-700" },
              { name: "Python", color: "bg-indigo-200 text-indigo-700" },
              { name: "Git", color: "bg-red-200 text-red-700" },
              { name: "UI/UX", color: "bg-pink-200 text-pink-700" },
              { name: "Java", color: "bg-orange-300 text-orange-800" },
              { name: "PHP", color: "bg-purple-300 text-purple-800" },
            ].map((skill) => (
              <span
                key={skill.name}
                className={`rounded-full px-3 py-1 text-sm font-medium ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </Section>

        <Section accent="border-orange-400 bg-orange-50">
          <h2 className="font-heading mb-5 text-2xl font-semibold text-orange-700">Experience</h2>
          <ul className="space-y-8 border-l-2 border-orange-200 pl-5">
            <li>
              <div className="flex flex-wrap items-center gap-2">
                <span className="block h-3 w-3 rounded-full bg-pink-500"></span>
                <span className="font-semibold text-black">Freelance Web Developer</span>
                <span className="text-xs text-zinc-500">2023–present</span>
              </div>
              <p className="ml-5 mt-1 text-sm text-zinc-700">
                Building and shipping modern websites and web applications for clients, with a focus on performance, usability, and clean user experience.
              </p>
            </li>

            <li>
              <div className="flex flex-wrap items-center gap-2">
                <span className="block h-3 w-3 rounded-full bg-cyan-500"></span>
                <span className="font-semibold text-black">Hackathon Projects</span>
                <span className="text-xs text-zinc-500">2024–2025</span>
              </div>
              <p className="ml-5 mt-1 text-sm text-zinc-700">
                Collaborated with teams to build web applications and prototypes under deadline pressure, quickly turning complex ideas into usable products.
              </p>
            </li>

            <li>
              <div className="flex flex-wrap items-center gap-2">
                <span className="block h-3 w-3 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-black">Quant Trading Challenge</span>
                <span className="text-xs text-zinc-500">2025</span>
              </div>
              <p className="ml-5 mt-1 text-sm text-zinc-700">
                Worked in a team to simulate trading logic and build a data-driven system using Python and server-side APIs, focusing on risk and decision-making.
              </p>
            </li>

            <li>
              <div className="flex flex-wrap items-center gap-2">
                <span className="block h-3 w-3 rounded-full bg-violet-500"></span>
                <span className="font-semibold text-black">Co-founder, Elven Dev</span>
                <span className="text-xs text-zinc-500">2026–present</span>
              </div>
              <p className="ml-5 mt-1 text-sm text-zinc-700">
                Helping businesses improve their online presence through modern web design, development, and digital product strategy.
              </p>
            </li>
          </ul>
        </Section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Section accent="border-emerald-400 bg-emerald-50">
            <h2 className="font-heading mb-5 text-2xl font-semibold text-emerald-700">Education</h2>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-black">
                BSc (Hons) Computer Science — University of Salford
              </span>
              <span className="text-sm text-zinc-600">2023–2027</span>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <span className="font-medium text-black">
                A-Level Computer Science — Winstanley College
              </span>
              <span className="text-sm text-zinc-600">Grade B, 2021–2023</span>
            </div>
          </Section>

          <Section accent="border-pink-400 bg-pink-50">
            <h2 className="font-heading mb-5 text-2xl font-semibold text-pink-700">Awards</h2>
            <div className="flex flex-col gap-2 text-zinc-700">
              <span className="font-medium text-black">First Place, LFG Hackathon</span>
              <span className="text-sm">2026</span>
              <span className="mt-4 font-medium text-black">
                Cash Prize: Quant Trading Challenge
              </span>
              <span className="text-sm">2025</span>
              <span className="font-medium text-black">University of Oxford Bebras</span>
              <span className="text-sm">Certificate of Gold, 2023</span>
              <span className="text-sm">Certificate of Distinction, 2021</span>
              <span className="mt-4 font-medium text-black">
                Academic Excellence in Computer Science
              </span>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
