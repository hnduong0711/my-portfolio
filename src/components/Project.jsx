import React, { useEffect, useRef, useState } from "react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import projects from "../data/project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsTotal = projects.length;
  const itemsRef = useRef([]);

  useGSAP(() => {
    projects.forEach((_, index) => {
      const el = itemsRef.current[index];
      if (!el) return;

      let offset = index - currentIndex;

      if (offset > projectsTotal / 2) offset -= projectsTotal;
      if (offset < -projectsTotal / 2) offset += projectsTotal;

      const isActive = Math.abs(offset) <= 1;

      gsap.to(el, {
        x: `${offset * 105}%`,
        scale: offset === 0 ? 1 : 0.7,
        rotationY: offset * -35,
        z: offset === 0 ? 0 : -400,
        opacity: offset === 0 ? 1 : isActive ? 0.4 : 0,
        zIndex: 30 - Math.abs(offset) * 10,
        pointerEvents: offset === 0 ? "auto" : "none",
        duration: 0.8,
        ease: "expo.out",
        overwrite: true,
      });
    });
  }, [currentIndex]);

  const goToSlide = (dir) => {
    setCurrentIndex((prev) => (prev + dir + projectsTotal) % projectsTotal);
  };

  return (
    <section className="overflow-hidden">
      <h1 className="font-heading text-xl md:text-4xl md:mb-2">Projects</h1>

      <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {/* project list */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="absolute w-[80%] md:w-[60%] bg-white text-black rounded-4xl py-2 px-8 shadow-2xl flex flex-col md:flex-row gap-6"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={"/images/test-img-project.png"}
                className="w-full md:w-1/2 rounded-xl object-cover h-full"
                alt={project.title}
              />
              <div className="flex flex-col justify-center flex-1 gap-2">
                <h2 className="text-xl font-bold p-1 text-center">{project.title}</h2>
                <p className="text-xs">
                  {project.description}
                </p>
                <div className="">
                  <span className="text-nowrap text-xs">Tech Stack:</span>

                  <div className="text-xs flex flex-wrap gap-2">
                    {project.tech.map((item, index) => (
                      <span
                        key={index}
                        className="text-[10px] p-1 text-nowrap rounded-sm bg-primary/10 text-primary border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="black-btn">
                    Github
                  </a>
                  <a href={project.livedemo} className="green-btn">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* controller */}
        <div className="absolute -bottom-16 flex z-100">
          <button
            onClick={() => goToSlide(-1)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all active:scale-90"
          >
            <CircleArrowLeft size={40} />
          </button>
          <button
            onClick={() => goToSlide(1)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all active:scale-90"
          >
            <CircleArrowRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
