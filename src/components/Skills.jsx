import React from "react";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    <section id="skills" className="h-screen">
      <h1 className="font-heading text-xl md:text-4xl text-white mb-6 md:mb-10 uppercase tracking-widest">
        Skills
      </h1>
      <div className={`h-[70vh]  w-full ${isTablet ? "col-center" : "flex-between"}`}>
        <div className="col-center w-full">
          <h1 className="font-heading text-lg text-white mb-6 md:mb-10 tracking-widest text-center">
            Technical skills
          </h1>
          <ul id="frontend">
            Front end:
            <li>ReactJS</li>
            <li>ReactJS</li>
            <li>ReactJS</li>
            <li>ReactJS</li>
          </ul>
          <ul id="backend">
            Back end:
            <li></li>
          </ul>
          <ul id="other">
            Other:
            <li></li>
          </ul>
        </div>
        <div className="col-center w-full">
          <h1 className="font-heading text-lg text-white mb-6 md:mb-10 tracking-widest text-center">
            Soft skills
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
