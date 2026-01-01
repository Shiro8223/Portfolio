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
      className="min-h-[60vh] flex items-center justify-center bg-white py-20"
    >
      <div className="w-full max-w-[1400px] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Let's Connect
        </h2>
        <p className="text-zinc-600 text-lg mb-12 max-w-2xl mx-auto">
          Interested in working together or just want to chat? Reach out via email or connect with me on social media.
        </p>
        
        {/* Email Button */}
        <a
          href="mailto:16staylor21@gmail.com"
          className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors mb-8"
        >
          Send me an email
        </a>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a 
            href="https://github.com/shiro8223" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-6 rounded-lg bg-gray-100 hover:bg-gray-900 transition-colors duration-300">
              <svg className="w-8 h-8 text-gray-800 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/shauntaylor21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-6 rounded-lg bg-gray-100 hover:bg-blue-700 transition-colors duration-300">
              <svg className="w-8 h-8 text-gray-800 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.047-8.794 0-9.714h3.554v1.377c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.395 3.733 4.403v5.544zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.771-1.713.923-1.713.153 0 .924.758.924 1.713 0 .947-.771 1.705-.932 1.705zm1.581 11.597H3.756V8.738h3.162v11.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
