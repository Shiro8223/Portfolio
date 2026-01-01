import { useState } from "react";
import Head from "next/head";

export default function Links() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/shiro8223",
      icon: "🐙",
      bgClass: "from-gray-800 to-black",
      glowColor: "shadow-gray-500/30",
      description: "Check out my projects & code except my private repositories they're mine unfortunately",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shauntaylor21",
      icon: "💼",
      bgClass: "from-blue-700 to-blue-900",
      glowColor: "shadow-blue-400/30",
      description: "Let's connect (trying to farm that 500+ games the game)",
    },
    {
      name: "Portfolio",
      url: "/",
      icon: "🌐",
      bgClass: "from-purple-600 to-pink-600",
      glowColor: "shadow-purple-400/30",
      description: "See what I'm working on in my professional field!",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/shiroxy8223",
      icon: "📸",
      bgClass: "from-pink-500 to-orange-500",
      glowColor: "shadow-pink-400/30",
      description: "Stalk my awesome sauce reposts twin",
    },
    {
      name: "Private Instagram",
      url: "https://instagram.com/Shaun_taylor27",
      icon: "🔒",
      bgClass: "from-red-700 to-red-900",
      glowColor: "shadow-red-500/30",
      description: "Only the goats get to go here",
    },
    {
      name: "Cortex Tree",
      url: "https://www.cortextree.com",
      icon: "🧠",
      bgClass: "from-blue-700 to-red-300",
      glowColor: "shadow-blue-500/30",
      description: "My AI B2B & B2C Vertical scaling SaaS startup (🤓)",
    },
    {
      name: "S+C's silly cat game",
      icon: "😼",
      bgClass: "from-green-700 to-yellow-300",
      glowColor: "shadow-green-500/30",
      description: "coming soon - waiting on her to design the assets :)",
    },
  ];

  return (
    <>
      <Head>
        <title>Shaun Taylor - Links</title>
        <meta name="description" content="Connect with me" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-gradient {
            background: linear-gradient(
              -45deg,
              #dc2626,
              #ef4444,
              #f87171,
              #dc2626
            );
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
          }
          .game-font {
            font-family: 'Press Start 2P', cursive;
            letter-spacing: 2px;
          }
        `}</style>
      </Head>

      <main className="animated-gradient min-h-screen text-white flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white game-font">
              My links :)
            </h1>
            <p className="text-white/70 text-sm mt-3 game-font">
              full time nerd part time pokemon collector
            </p>
          </div>

          {/* Links Grid */}
          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url !== "/" ? "_blank" : "_self"}
                rel={link.url !== "/" ? "noopener noreferrer" : ""}
                className="block group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative overflow-hidden rounded-xl p-7 transition-all duration-300 cursor-pointer border bg-gradient-to-br
                    ${
                      hoveredIndex === index
                        ? `${link.bgClass} border-white shadow-2xl ${link.glowColor} scale-105`
                        : `${link.bgClass} border-white/20 hover:border-white/40`
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-5">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="text-base font-bold transition-colors duration-300 text-white game-font">
                        {link.name}
                      </span>
                    </div>
                    <span
                      className={`text-2xl font-bold transition-all duration-300 ${
                        hoveredIndex === index
                          ? "translate-x-3 text-white"
                          : "text-white/70"
                      }`}
                    >
                      ↗
                    </span>
                  </div>
                  <p className="text-white/80 text-xs">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
