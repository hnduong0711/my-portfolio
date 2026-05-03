import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { workExperiences } from "../data/workexp";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkExp = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);

  const totalItems = workExperiences.length;

  useGSAP(
    () => {
      gsap.set(cardsRef.current, {
        opacity: 0,
        scale: 0.9,
        visibility: "hidden",
      });

      gsap.set(cardsRef.current[0], {
        opacity: 1,
        scale: 1,
        visibility: "visible",
      });

      gsap.set(progressRef.current, {
        transformOrigin: isMobile ? "top center" : "left center",
        scaleX: isMobile ? 1 : 0,
        scaleY: isMobile ? 0 : 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalItems * 100}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      //progress
      tl.to(
        progressRef.current,
        {
          [isMobile ? "scaleY" : "scaleX"]: 1,
          ease: "none",
        },
        0,
      );

      //card transit
      workExperiences.forEach((_, index) => {
        if (index === totalItems - 1) return;

        const currentCard = cardsRef.current[index];
        const nextCard = cardsRef.current[index + 1];

        const position = index;

        // current card out
        tl.to(
          currentCard,
          {
            opacity: 0,
            scale: 0.9,
            x: isMobile ? 0 : -100,
            y: isMobile ? -60 : 0,
            duration: 0.4,
            onComplete: () => {
              gsap.set(currentCard, {
                visibility: "hidden",
              });
            },
            onReverseComplete: () => {
              gsap.set(currentCard, {
                visibility: "visible",
              });
            },
          },
          position + 0.6,
        );

        // next card in
        tl.fromTo(
          nextCard,
          {
            opacity: 0,
            scale: 0.9,
            visibility: "hidden",
            x: isMobile ? 0 : 100,
            y: isMobile ? 60 : 0,
          },
          {
            opacity: 1,
            scale: 1,
            visibility: "visible",
            x: 0,
            y: 0,
            duration: 0.4,
            immediateRender: false,
          },
          position + 0.6,
        );
      });
    },
    {
      scope: sectionRef,
      dependencies: [isMobile, totalItems],
      revertOnUpdate: true,
    },
  );

  return (
    <section
    id="workexp"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden col-center"
    >
      {/* progress bar */}
      <div
        className={`fixed z-50 bg-white/5 ${
          isMobile
            ? "right-4 top-[25%] w-1 h-[50vh]"
            : "bottom-12 left-1/2 -translate-x-1/2 w-1/2 h-1"
        } rounded-full`}
      >
        {/* fill line */}
        <div
          ref={progressRef}
          className="w-full h-full bg-primary rounded-full"
        />

        {/* checkpoints */}
        {workExperiences.map((_, i) => {
          const ratio = (i / (totalItems - 1)) * 100;

          return (
            <div
              key={i}
              className="absolute w-3 h-3 bg-zinc-800 border border-zinc-700 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                left: isMobile ? "50%" : `${ratio}%`,
                top: isMobile ? `${ratio}%` : "50%",
              }}
            />
          );
        })}
      </div>

      {/* content */}
      <div className="w-full max-w-5xl px-6 flex flex-col h-full">
        <h1 className="font-heading text-xl md:text-4xl text-white mb-6 md:mb-10 text-center tracking-widest">
          Work Experience
        </h1>

        <div className="relative flex-1">
          {workExperiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute inset-0 bg-white rounded-2xl p-6 md:p-4 flex flex-col md:flex-row gap-8 shadow-2xl overflow-hidden"
              style={{
                zIndex: totalItems - index,
              }}
            >
              {/* left */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-zinc-100 pb-6 md:pb-0 md:pr-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-50 rounded-2xl p-3 mb-4">
                  <img
                    src={exp.logo}
                    alt="company logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h2 className="text-xl md:text-2xl font-black text-black text-center md:text-left leading-tight uppercase">
                  {exp.company}
                </h2>

                <p className="mt-2 text-[10px] md:text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
                  {exp.duration}
                </p>
              </div>

              {/* right */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <h3 className="text-lg font-bold text-zinc-800 mb-4">
                  {exp.role}
                </h3>

                <ul className="space-y-3">
                  {exp.responsibilities.map((res, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
