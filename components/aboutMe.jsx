export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Header (title + inline button) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-1">
              Resume
            </h1>
            <p className="text-zinc-700 text-lg">
              Software Engineer, Web Developer, Creator.
            </p>
          </div>

          <a
            href="/TAYLOR_SHAUN_CV.pdf"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-black text-white font-semibold hover:bg-pink-600 transition-colors text-base"
            download
            aria-label="Download CV"
          >
            Download CV
          </a>
        </div>

        {/* Intro */}
        <p className="text-zinc-600 text-base leading-relaxed">
          I’m Shaun Taylor, a developer passionate about creative, effective solutions and strong digital experiences. I enjoy working at the intersection of design and engineering, with a focus on simplicity and clarity in every project.<br /><br />
          With hands-on experience in React, Next.js, Tailwind CSS, and a variety of web technologies, I love turning ideas into reality. Whether collaborating with teams or building solo, I’m all about delivering polished products that make a real difference.
        </p>

        {/* Skills Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript",
              "HTML5", "CSS3", "Node.js", "Python", "Git", "UI/UX", "java", "PHP"
            ].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-zinc-200 text-zinc-700 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">Experience</h2>
          <ul className="border-l-2 border-zinc-200 pl-4 space-y-6">
            <li>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full block"></span>
                <span className="text-black font-semibold">
                  Web Developer @ Freelance
                </span>
                <span className="text-xs text-zinc-500 ml-3">
                  2023–present
                </span>
              </div>
              <p className="ml-5 text-zinc-700 text-sm">
                Designing, building and deploying modern web apps and portfolios for clients, with a focus on performance and accessibility.
              </p>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full block"></span>
                <span className="text-black font-semibold">
                  Great Univeristy hackathon
                </span>
                <span className="text-xs text-zinc-500 ml-3">
                  2024
                </span>
              </div>
              <p className="ml-5 text-zinc-700 text-sm">
                Collaborated with a team to create a web hosted python flask project under time constraints.
              </p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">Education</h2>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-black">
              BSc (Hons) Computer Science — University of Salford
            </span>
            <span className="text-zinc-600 text-sm">2023–2027</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-black">
              A level Computer Science — Winstanley college 
            </span>
            <span className="text-zinc-600 text-sm">Grade B, 2021–2023</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-black">
              GCSE Grades — Westleigh Highschool 
            </span>
            <span className="text-zinc-600 text-sm">Grade 8/A* Computer science</span>
            <span className="text-zinc-600 text-sm">Grade 8/A* Mathamatics</span>
            <span className="text-zinc-600 text-sm">Grade 88/A*A* English Literature & Language</span>
            <span className="text-zinc-600 text-sm">Grade 88/A*A* Science double award</span>
            <span className="text-zinc-600 text-sm">2016–2021</span>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">Awards</h2>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-black">
              University of Oxford Bebras 
            </span>
            <span className="text-zinc-600 text-sm">Certificate of Gold 2023</span>
            <span className="text-zinc-600 text-sm">Certificate of Distinction 2021</span>
            <span className="font-medium text-black">
              Computer science - Academic Excellence Certificate 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
