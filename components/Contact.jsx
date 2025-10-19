import { useEffect, useRef, useState } from "react";
import { useRefresh } from '../context/RefreshContext';

// 1. DEFINE ANIMATEDPATH HERE
function AnimatedPath({ d, stroke, strokeWidth, duration = 1.4, refreshKey }) {
  const pathRef = useRef(null);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setLen(pathRef.current.getTotalLength());
    }
  }, [d]);

  return (
    <path
      key={refreshKey}
      ref={pathRef}
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        filter: "drop-shadow(0 3px 12px #22c55e80)",
        strokeDasharray: len,
        strokeDashoffset: len,
        animation: `drawLine ${duration}s cubic-bezier(0.4,0,0.2,1) forwards`
      }}
    />
  );
}

// 2. CSS KEYFRAMES INJECTION (UNCHANGED)
const globalCSS = `
@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
`;

export default function Contact() {
  const { refreshKey } = useRefresh();

  useEffect(() => {
    if (!document.getElementById("drawLineAnim")) {
      const style = document.createElement("style");
      style.id = "drawLineAnim";
      style.innerHTML = globalCSS;
      document.head.appendChild(style);
    }
  }, []);

  const expD = "M80,260 C200,220 400,120 720,50";

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex items-center justify-center bg-white py-20"
    >
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-[1200px] items-stretch">
        {/* Contact Form */}
        <div className="bg-white border border-zinc-200 shadow-xl rounded-2xl p-8 w-full max-w-[510px] flex flex-col min-h-[412px]">
          <h2 className="text-3xl font-bold mb-4 text-black text-center">
            Contact Me
          </h2>
          <p className="text-zinc-700 mb-8 text-center text-sm">
            Interested in working together, have a question, or just want to say hi?  
            Fill out the form below or email me directly at{" "}
            <a
              href="mailto:16staylor21@gmail.com"
              className="underline text-pink-600 hover:text-pink-700 transition"
            >
              16staylor21@gmail.com
            </a>
          </p>
          <form
            className="flex flex-col gap-4 mt-auto"
            onSubmit={e => { e.preventDefault(); alert("Demo only!"); }}
          >
            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Name</label>
              <input type="text" required className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Message</label>
              <textarea required rows={4} className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="How can I help you?" />
            </div>
            <button type="submit" className="bg-black text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Graph Widget */}
        <div className="bg-white border border-zinc-200 shadow-xl rounded-2xl p-8 flex flex-col w-full max-w-[880px] min-w-[400px] min-h-[520px] justify-center">
          <h2 className="text-3xl font-bold mb-4 text-black text-center">
            Our Projected Results
          </h2>
          <div className="flex-1 flex items-center justify-center w-full">
            <svg
              viewBox="0 0 800 300"
              width="95%"
              height="225"
              className="mb-2"
              style={{ maxWidth: "800px", maxHeight: "225px" }}
            >
              {/* Axes */}
              <line x1="80" y1="30" x2="80" y2="260" stroke="#aaa" strokeWidth="3.5" />
              <line x1="80" y1="260" x2="760" y2="260" stroke="#aaa" strokeWidth="3.5" />
              {/* Exponential Upwards Trend (Animated, Green) */}
              <AnimatedPath
                d={expD}
                stroke="#22c55e"
                strokeWidth={10}
                refreshKey={refreshKey}
              />
              {/* Y axis label */}
              <text
                x="32"
                y="145"
                transform="rotate(-90 32 145)"
                fontSize="22"
                fill="#555"
                fontWeight="bold"
                letterSpacing="0.04em"
                style={{ textAnchor: "middle" }}
              >
                Results
              </text>
              {/* X axis label */}
              <text
                x="420"
                y="285"
                fontSize="18"
                fill="#555"
                fontWeight="bold"
                letterSpacing="0.04em"
                style={{ textAnchor: "middle" }}
              >
                Time Collabed Together
              </text>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  );
}
