import { useState, useEffect } from "react";

const courses = [
  "BSc Computer Science – University of Salford",
  "Advanced JavaScript Bootcamp",
  "AI Foundations – Coursera",
];

const hobbies = [
  "Competitive gaming (Valorant, CS)",
  "Automating fun stuff with Python",
  "Digital art & UI design",
  "Powerlifting",
  "Anime & manga",
];

const postsData = [
  {
    title: "Learning React the Fun Way",
    date: "2024-07-18",
    content:
      "I’ve started building some crazy cool stuff with React hooks and Framer Motion. Code is art, and animations make everything pop. 🚀",
  },
  {
    title: "Why I Love TypeScript",
    date: "2024-07-14",
    content:
      "Type safety means I break less stuff, and I sleep better at night. Here’s why: strict types, better IDEs, and fewer bugs in prod.",
  },
  {
    title: "Next.js: My Portfolio Stack",
    date: "2024-07-10",
    content:
      "SSR, easy routing, and Tailwind make my dev life so much better. If you want performance and developer joy, try Next.js!",
  },
];

function FeedItem({ post, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl border-2 border-emerald-600/70 bg-emerald-100/90 shadow-md transition-all
        focus:outline-none ${isOpen ? "ring-2 ring-pink-400" : ""}`}
      style={{ boxShadow: "0 2px 8px rgba(16,160,98,0.05)" }}
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-3 py-4 px-5">
        <h3 className="text-lg font-bold text-black flex-1">{post.title}</h3>
        <span className="text-xs text-emerald-800">{post.date}</span>
        <span className="ml-2 text-xl select-none">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out px-5`}
        style={{
          maxHeight: isOpen ? 200 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-emerald-900 text-base pb-4">{post.content}</p>
      </div>
    </button>
  );
}

export default function Blog() {
  const [selected, setSelected] = useState("Feed");
  const [openFeedIndex, setOpenFeedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(postsData);
      setLoading(false);
    }, 900);
  }, []);

  // Sidebar configs
  const sidebar = [
    {
      key: "Feed",
      label: "Feed",
      color: "bg-emerald-200/80 border-emerald-600 text-emerald-900",
      icon: "📢",
    },
    {
      key: "Courses",
      label: "Courses",
      color: "bg-pink-200/90 border-pink-600 text-pink-900",
      icon: "🎓",
    },
    {
      key: "Hobbies",
      label: "Hobbies & Interests",
      color: "bg-blue-200/90 border-blue-600 text-blue-900",
      icon: "🎮",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white px-2 py-12 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight mb-8 text-black text-center w-full">
        Who am i?
      </h1>

      {/* Layout: sidebar + main */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Sidebar Widget Container */}
        <div className="md:w-[250px] w-full">
          <div className="bg-gradient-to-br from-pink-200 via-blue-100 to-emerald-100 border-2 border-pink-300 shadow-lg rounded-2xl p-4 flex flex-col gap-3">
            {/* Optional mini title: */}
            <div className="text-sm uppercase font-bold tracking-wide text-zinc-700 pb-2 pl-2">
              Menu
            </div>
            {/* Selector Buttons */}
            {sidebar.map((item) => (
              <button
                key={item.key}
                className={`flex items-center gap-2 rounded-xl shadow border px-4 py-3 font-semibold transition-all
                  hover:scale-[1.03] hover:shadow-lg
                  ${item.color}
                  ${selected === item.key ? "ring-2 ring-pink-400 scale-105" : "opacity-80"}
                  w-full`}
                onClick={() => setSelected(item.key)}
                aria-pressed={selected === item.key}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-base md:text-lg">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main display area */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl shadow p-8 min-h-[320px] border-2 transition-all
            bg-white border-zinc-200">
            {/* Main content selector */}
            {selected === "Feed" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-emerald-900 flex items-center gap-2">
                  <span>📢</span> My Feed
                </h2>
                <div className="flex flex-col gap-5">
                  {loading
                    ? (
                      <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-5 animate-pulse">
                        <div className="h-6 w-2/3 bg-emerald-200 rounded mb-2"></div>
                        <div className="h-4 w-2/5 bg-emerald-100 rounded mb-1"></div>
                      </div>
                    )
                    : posts.map((post, i) => (
                      <FeedItem
                        key={i}
                        post={post}
                        isOpen={openFeedIndex === i}
                        onClick={() => setOpenFeedIndex(openFeedIndex === i ? null : i)}
                      />
                    ))}
                </div>
              </div>
            )}

            {selected === "Courses" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-pink-900 flex items-center gap-2">
                  <span>🎓</span> Courses
                </h2>
                <ul className="flex flex-col gap-3">
                  {courses.map((course, i) => (
                    <li
                      key={i}
                      className="px-3 py-2 bg-pink-100/90 border border-pink-200 rounded font-medium text-pink-800 text-base"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selected === "Hobbies" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
                  <span>🎮</span> Hobbies & Interests
                </h2>
                <ul className="flex flex-col gap-2">
                  {hobbies.map((hobby, i) => (
                    <li
                      key={i}
                      className="text-blue-900 text-base pl-2 relative before:content-['•'] before:absolute before:-left-2 before:text-pink-600"
                    >
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
