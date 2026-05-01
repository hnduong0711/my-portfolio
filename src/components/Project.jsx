import React, { useEffect, useState } from "react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import projects from "../data/project";

const SideProject = ({ sideProject }) => {
  return (
    <div className="col-center w-1/5 opacity-40">
      <img src="/images/test-img-project.png" alt="Banner" />
      <h1 className="text-sm text-white">{sideProject.title}</h1>
    </div>
  );
};

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsTotal = projects.length;
  const goToSlide = (index) => {
    const newIndex = (index + projectsTotal) % projectsTotal;
    setCurrentIndex(newIndex);
  };
  const getProjectAt = (indexOffset) => {
    return projects[
      (currentIndex + indexOffset + projectsTotal) % projectsTotal
    ];
  };

  const currentProject = getProjectAt(0);
  const prevProject = getProjectAt(-1);
  const nextProject = getProjectAt(1);
  useEffect(() => {
    console.log(prevProject);
  }, []);
  return (
    <section id="proj-card" className="gap-6">
      {/* title */}
      <h1 className="font-heading text-xl md:text-4xl">Projects</h1>
      {/* content */}
      <div className="flex-between relative">
        {/* prev btn */}
        <button className="z-10 absolute" onClick={() => goToSlide(currentIndex - 1)}>
          <CircleArrowLeft size={30}/>
        </button>
        {/* prev side project */}
        <SideProject sideProject={prevProject} />
        {/* project item */}
        <div className="flex-between items-start gap-2 bg-white text-black py-10 px-5 rounded-sm w-3/5 h-[70vh]">
          <img
            src="/images/test-img-project.png"
            alt="Banner"
            className="w-2/5"
          />
          {/* info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">{currentProject.title}</h1>
            <div className="text-sm">
              Description: {currentProject.description}
            </div>
            <div className="">
              <span className="text-nowrap text-sm">Tech Stack:</span>
              <div className="text-sm flex flex-wrap gap-2">
                {currentProject.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs p-1 text-nowrap rounded-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-between">
              <a href={currentProject.github} className="btn">
                Github here
              </a>
              <a href={currentProject.livedemo} className="btn">
                Live demo
              </a>
              {currentProject.videodemo && (
                <>
                  <a href={currentProject.videodemo} className="btn">
                    Video demo
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        {/* next side project */}
        <SideProject sideProject={nextProject} />
        {/* next btn */}
        <button onClick={() => goToSlide(currentIndex + 1)} className="z-10 absolute right-0">
          <CircleArrowRight size={30}/>
        </button>
      </div>
    </section>
  );
};

export default Project;
