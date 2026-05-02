import React, { useEffect, useRef, useState } from "react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import projects from "../data/project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsTotal = projects.length;
  const itemsRef = useRef([]);
  const containerRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    projects.forEach((_, index) => {
      const el = itemsRef.current[index];
      if (!el) return;

      let offset = index - currentIndex;
      if (offset > projectsTotal / 2) offset -= projectsTotal;
      if (offset < -projectsTotal / 2) offset += projectsTotal;

      // Logic cho Mobile vs Desktop
      const isCurrent = offset === 0;
      const isNeighbor = Math.abs(offset) <= 1;

      gsap.to(el, {
        x: isMobile ? `${offset * 120}%` : `${offset * 110}%`,
        scale: isCurrent ? 1 : isMobile ? 0.5 : 0.7,
        rotationY: isMobile ? 0 : offset * -35,
        z: isCurrent ? 0 : -300,
        opacity: isCurrent ? 1 : isMobile ? 0 : 0.4,
        zIndex: isCurrent ? 30 : 10,
        display: isMobile && !isCurrent ? "none" : "flex",
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
      });
    });
  }, [currentIndex, isMobile]);

  const goToSlide = (dir) => {
    setCurrentIndex((prev) => (prev + dir + projectsTotal) % projectsTotal);
  };

  return (
    <section className="overflow-hidden h-screen">
      <h1 className="font-heading text-xl md:text-4xl md:mb-2">Projects</h1>

      <div className="relative w-full max-w-5xl md:h-[80vh] h-[50vh] flex-center">
        {/* project list */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="absolute w-[90%] md:w-[60%] h-auto md:h-auto bg-white text-black rounded-3xl p-4 md:p-8 shadow-2xl flex flex-col md:flex-row gap-4 md:gap-6"
              style={{ backfaceVisibility: "hidden" }}
            >
              {!isMobile && (
                <div className="w-full md:w-1/2 h-48 md:h-64 overflow-hidden rounded-xl">
                  <img
                    src={"/images/test-img-project.png"}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />
                </div>
              )}

              <div className="flex flex-col justify-between flex-1 gap-2">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-center md:text-left">
                    {project.title}
                  </h2>
                  <p className="text-[11px] md:text-xs text-gray-600 mt-1 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] md:text-xs font-semibold">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((item, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  <a
                    href={project.github}
                    className="black-btn"
                  >
                    Github
                  </a>
                  <a
                    href={project.livedemo}
                    className="green-btn"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* controller */}
        <div className="absolute md:-bottom-8 -bottom-1 right-0 left-0 flex z-100 w-full flex-between">
          <button
            onClick={() => goToSlide(-1)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all active:scale-90"
          >
            <CircleArrowLeft size={isMobile ? 20 : 40} />
          </button>
          <button
            onClick={() => goToSlide(1)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all active:scale-90"
          >
            <CircleArrowRight size={isMobile ? 20 : 40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
