import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationData } from "../data/education";

gsap.registerPlugin(ScrollTrigger);

// deterministic rotation
const getRotation = (id) => ((id * 37) % 5) - 2;

const NoteCard = ({ item }) => {
  const rotation = getRotation(item.id);

  return (
    <div
      className="
        edu-card
        relative
        bg-[#fdfcf0]
        hover:bg-white
        p-5
        pt-8
        text-left
        transition-all
        duration-500
        ease-out
        shadow-[5px_5px_15px_rgba(0,0,0,0.3)]
        hover:shadow-[10px_10px_25px_rgba(0,0,0,0.4)]
        hover:-translate-y-2
        cursor-default
        group
      "
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full shadow-md relative z-10">
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/40 rounded-full" />
        </div>
        <div className="w-1 h-3 bg-black/20 -mt-1 blur-[1px]" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg text-slate-800 leading-tight">
        {item.title}
      </h3>

      <div className="w-full h-px bg-slate-200 my-2" />

      <p className="text-xs font-medium text-slate-600 italic">
        {item.subtitle}
      </p>

      <div className="mt-4 flex flex-col gap-1">
        <p className="text-[10px] font-bold text-bold uppercase tracking-tighter">
          {item.duration}
        </p>
        <p className="text-[10px] text-slate-400 font-sans">{item.extra}</p>
      </div>

      {/* corner fold */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent via-black/5 to-black/10 rounded-br-lg" />
    </div>
  );
};

const EducationAndCertificate = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".edu-card",
        {
          opacity: 0,
          y: 60,
          rotation: 0,
        },
        {
          opacity: 1,
          y: 0,
          rotation: (i, el) => gsap.getProperty(el, "rotation"),
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center bg-[#1a1a1a]"
    >
      <h1 className="font-heading text-xl md:text-4xl text-white mb-6 md:mb-10 tracking-widest">
        Education & Certificates
      </h1>

      <div ref={containerRef} className="relative w-full">
        {/* Board */}
        <div
          className="
            relative
            bg-gradient-to-br from-white/5 to-white/0
            backdrop-blur-md
            border border-white/10
            rounded-3xl
            p-8 md:p-16
            shadow-2xl
          "
        >
          {/* decorative dots */}
          <div className="absolute top-4 right-8 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {educationData.map((item) => (
              <NoteCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* footer text */}
        <div className="mt-8 text-center text-white/20 text-xs tracking-[0.5em] uppercase font-light">
          Learning is a lifelong journey
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertificate;
