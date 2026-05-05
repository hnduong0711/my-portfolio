import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Avatar animation
      tl.from(".about-avatar", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      });

      // Terminal container
      tl.from(
        ".terminal",
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
        },
        "-=0.4",
      );

      // từng dòng terminal
      linesRef.current.forEach((line, i) => {
        tl.from(line, {
          opacity: 0,
          y: 10,
          duration: 0.4,
        });
      });
    },
    { scope: containerRef },
  );

  const setLineRef = (el, index) => {
    if (el) linesRef.current[index] = el;
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen py-20 px-4 flex flex-col items-center bg-[#1a1a1a]"
    >
      <h1 className="font-heading text-xl md:text-4xl text-white mb-6 md:mb-10 tracking-widest">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Avatar */}
        <div className="about-avatar w-full md:w-2/5">
          <div className="relative">
            <img
              src="/images/lovemyself.jpg"
              className="w-full rounded-2xl object-cover"
            />

            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]" />
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal w-full md:w-3/5 bg-black/80 border border-white/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="ml-4 text-xs text-white/40">about.sh</span>
          </div>

          {/* Body */}
          <div className="p-4 font-mono text-sm text-green-400 space-y-3">
            <div ref={(el) => setLineRef(el, 0)}>
              <span className="text-white/60">$</span> whoami
            </div>

            <div ref={(el) => setLineRef(el, 1)} className="text-white">
              A developer who turns complex problems into elegant, pixel-perfect
              interfaces.
            </div>

            <div ref={(el) => setLineRef(el, 6)}>
              <span className="text-white/60">$</span> cat philosophy.txt
            </div>

            <div ref={(el) => setLineRef(el, 7)} className="text-white">
              <div>"Keep it simple, but significant."</div>
              <div>"Code is for humans, not just machines."</div>
            </div>

            <div ref={(el) => setLineRef(el, 8)}>
              <span className="text-white/60">$</span> sudo install soul.pkg
              --vibe=creative
            </div>

            <div ref={(el) => setLineRef(el, 9)} className="text-white">
              <div className="text-white/50">
                [SYSTEM] The following modules will be added:
                <ul className="ml-4 mt-1">
                  <li className="text-secondary">- ocean_breeze.lib</li>
                  <li className="text-primary">- absolute_freedom.bin</li>
                  <li className="text-bold">- digital_canvas.brush</li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="text-white">
                  [SYSTEM] Proceed with installation? [y/n]:{" "}
                </span>
                <span className="text-primary animate-pulse font-bold underline">
                  y
                </span>
              </div>

              {/* Progress Bar - Dùng chính màu Primary của bạn */}
              <div className="mt-4">
                <span className="text-white/50">[PROGRESS] </span>
                <span className="text-primary">
                  {"#".repeat(20)} <span className="ml-2">100%</span>
                </span>
              </div>
              <div className="mt-6 font-mono text-sm border-t border-white/5 pt-4">
                <div className="flex gap-2 mb-1">
                  <span className="text-primary">[INFO]</span>
                  <span className="text-white/90">Manifesto established:</span>
                </div>
                <div className="pl-4 border-l border-white/10 ml-2 space-y-1">
                  <p className="text-white/70">
                    &gt; Logic meets art; code becomes the brush.
                  </p>
                  <p className="text-white/70">
                    &gt; Source: <span className="text-secondary">Ocean</span>{" "}
                    // Host: <span className="text-white">Freedom</span>
                  </p>
                </div>
                <p className="mt-4 text-primary/60 text-[10px] uppercase tracking-widest">
                  System.ready --status=optimal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
