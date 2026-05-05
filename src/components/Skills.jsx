import React from "react";
import { useMediaQuery } from "react-responsive";
import ParticleBackground from "./ParticleBackground";
import { softSkills, technicalSkills } from "../data/skills";

const Skills = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    <section id="skills" className="h-screen overflow-hidden">
      <h1 className="font-heading text-xl md:text-4xl text-white mb-6 md:mb-10 tracking-widest">
        Skills
      </h1>

      <div
        className={`h-[70vh] w-full gap-6 ${isTablet ? "flex flex-col" : "flex flex-row"}`}
      >
        {/* Cột Technical Skills */}
        <div className="relative group flex-1 min-h-0 bg-white/1 rounded-2xl border border-primary/90 overflow-hidden flex flex-col items-stretch p-8 transition-colors hover:bg-white/5">
          {/* Background hiệu ứng */}
          <ParticleBackground />

          {/* Nội dung phải để z-10 để nằm trên canvas */}
          <div className="relative z-10 w-full text-center flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
            <h1
              className={`font-heading ${isTablet ? "text-sm" : "text-lg"} text-bold mb-6 tracking-widest uppercase`}
            >
              Technical skills
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70 text-sm">
              {technicalSkills.map((skill) => (
                <div className="text-left space-y-3" key={skill.id}>
                  <h3 className="text-primary font-bold uppercase tracking-wide text-xs md:text-sm">
                    {skill.type}
                  </h3>
                  <ul className="space-y-2">
                    {skill.list.map((item) => (
                      <li
                        className="flex items-center gap-2 text-white/70 text-xs md:text-sm"
                        key={item.id}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột Soft Skills */}
        <div className="relative group flex-1 min-h-0 bg-white/1 rounded-2xl border border-primary/90 overflow-hidden flex flex-col items-center p-8 transition-colors hover:bg-white/5">
          <ParticleBackground />

          <div className="relative z-10 w-full text-center min-h-0 overflow-y-auto pr-2 custom-scrollbar">
            <h1
              className={`font-heading ${isTablet ? "text-sm" : "text-lg"} text-bold mb-6 tracking-widest uppercase`}
            >
              Soft skills
            </h1>
            <ul className="space-y-2">
              {softSkills.map((skill) => (
                <li
                  key={skill.id}
                  className="flex items-center gap-2 text-white/70 text-xs md:text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {skill.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
